
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StreakDisplay } from "@/components/streak-display";
import { toast } from "sonner";
import { 
  User, 
  UserPlus, 
  UserMinus, 
  Flag, 
  FlagOff, 
  CalendarCheck 
} from "lucide-react";

// Mock data for now
interface GroupMember {
  id: string;
  name: string;
  avatar?: string;
  isActive: boolean;
}

interface GroupStreakProps {
  groupId?: string;
  className?: string;
}

export function GroupStreak({ groupId, className }: GroupStreakProps) {
  const [groupName, setGroupName] = useState(groupId ? "Study Squad" : "");
  const [memberIdInput, setMemberIdInput] = useState("");
  const [groupStreak, setGroupStreak] = useState(5);
  const [hasGroup, setHasGroup] = useState(!!groupId);
  const [breakerId, setBreakerId] = useState<string | null>(null);
  const [recoveryTask, setRecoveryTask] = useState<string | null>(null);
  const [recoveryTaskInput, setRecoveryTaskInput] = useState("");
  const [members, setMembers] = useState<GroupMember[]>([
    { id: "user123", name: "You", isActive: true },
    { id: "jane42", name: "Jane", isActive: true },
    { id: "alex99", name: "Alex", isActive: true }
  ]);

  // Create a new group
  const handleCreateGroup = () => {
    if (!groupName.trim()) {
      toast.error("Please enter a group name");
      return;
    }
    
    setHasGroup(true);
    toast.success(`Group "${groupName}" created successfully!`);
  };

  // Join an existing group
  const handleJoinGroup = () => {
    // In a real app, this would validate the group ID against the server
    if (!memberIdInput.trim()) {
      toast.error("Please enter a valid group ID");
      return;
    }
    
    setHasGroup(true);
    setGroupName("Study Squad"); // In real app, would fetch the actual name
    toast.success(`Joined group "${groupName}" successfully!`);
  };

  // Add a member to the group
  const handleAddMember = () => {
    if (!memberIdInput.trim()) {
      toast.error("Please enter a member ID");
      return;
    }
    
    // Check if member already exists
    if (members.some(member => member.id === memberIdInput)) {
      toast.error("Member already in group");
      return;
    }
    
    const newMember: GroupMember = {
      id: memberIdInput,
      name: memberIdInput, // In real app, would fetch the real name
      isActive: true
    };
    
    setMembers([...members, newMember]);
    setMemberIdInput("");
    toast.success("Member added to group!");
  };

  // Remove a member from the group
  const handleRemoveMember = (id: string) => {
    setMembers(members.filter(member => member.id !== id));
    toast.info("Member removed from group");
  };

  // Simulate a streak break
  const handleBreakStreak = (id: string) => {
    const member = members.find(m => m.id === id);
    if (!member) return;
    
    setBreakerId(id);
    setGroupStreak(0);
    toast.error(`${member.name} broke the streak! Recovery challenge required.`);
  };

  // Set a recovery task
  const handleSetRecoveryTask = () => {
    if (!recoveryTaskInput.trim()) {
      toast.error("Please enter a recovery task");
      return;
    }
    
    setRecoveryTask(recoveryTaskInput);
    setRecoveryTaskInput("");
    toast.success("Recovery task set! Waiting for completion.");
  };

  // Complete a recovery task
  const handleCompleteRecoveryTask = () => {
    setBreakerId(null);
    setRecoveryTask(null);
    setGroupStreak(1);
    
    // Update all members to active
    setMembers(members.map(member => ({ ...member, isActive: true })));
    
    toast.success("Recovery task completed! Streak restarted for everyone.");
  };

  // Choose a predefined recovery task
  const handleSelectTask = (task: string) => {
    setRecoveryTask(task);
    toast.success("Recovery task selected! Waiting for completion.");
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {hasGroup ? (
            <>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                <span>{groupName}</span>
              </div>
              <Badge variant="outline" className="ml-2">
                {members.length} members
              </Badge>
            </>
          ) : (
            "Group Streak"
          )}
        </CardTitle>
        <CardDescription>
          {hasGroup 
            ? "Support each other to maintain your learning streak" 
            : "Create or join a group to build streaks together"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {!hasGroup ? (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Create a new group</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Group Name" 
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
                <Button onClick={handleCreateGroup}>
                  Create
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Join an existing group</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Group ID" 
                  value={memberIdInput}
                  onChange={(e) => setMemberIdInput(e.target.value)}
                />
                <Button onClick={handleJoinGroup} variant="outline">
                  Join
                </Button>
              </div>
            </div>
          </div>
        ) : breakerId ? (
          <div className="space-y-4">
            <div className="bg-destructive/10 rounded-lg p-4">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <FlagOff className="h-4 w-4 text-destructive" />
                Streak Broken!
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {members.find(m => m.id === breakerId)?.name || "Someone"} broke the group streak. 
                They need to complete a recovery task to restart the streak for everyone.
              </p>
              {recoveryTask ? (
                <div className="bg-card p-3 rounded-md border">
                  <h4 className="text-sm font-medium mb-1">Current Recovery Task:</h4>
                  <p className="text-sm">{recoveryTask}</p>
                  
                  {breakerId === "user123" && (
                    <Button 
                      className="mt-3 w-full" 
                      size="sm"
                      onClick={handleCompleteRecoveryTask}
                    >
                      Mark as Completed
                    </Button>
                  )}
                </div>
              ) : breakerId === "user123" ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Create your own recovery task:</h4>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Enter recovery task" 
                        value={recoveryTaskInput}
                        onChange={(e) => setRecoveryTaskInput(e.target.value)}
                      />
                      <Button size="sm" onClick={handleSetRecoveryTask}>Set</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Or choose from suggestions:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <Button variant="outline" size="sm" className="justify-start" onClick={() => handleSelectTask("Complete 5 extra learning cards")}>
                        Complete 5 extra learning cards
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start" onClick={() => handleSelectTask("Make a 30-second video explaining what you learned")}>
                        Make a 30-second video explaining what you learned
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start" onClick={() => handleSelectTask("Take a mini quiz on the current topic")}>
                        Take a mini quiz on the current topic
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm italic">
                  Waiting for {members.find(m => m.id === breakerId)?.name} to set a recovery task...
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <StreakDisplay 
                streak={groupStreak} 
                className="mb-2 bg-primary/10 px-4 py-2 rounded-lg"
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Group Members</h3>
              <div className="space-y-2">
                {members.map(member => (
                  <div key={member.id} className="flex items-center justify-between bg-card p-2 rounded border">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        {member.avatar ? (
                          <img src={member.avatar} alt={member.name} className="w-full h-full rounded-full" />
                        ) : (
                          <span>{member.name.charAt(0).toUpperCase()}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <div className="flex items-center gap-1">
                          <CalendarCheck className="h-3 w-3 text-primary" />
                          <span className="text-xs text-muted-foreground">Active</span>
                        </div>
                      </div>
                    </div>
                    
                    {member.id !== "user123" && (
                      <div className="flex">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleBreakStreak(member.id)}
                          className="h-8 w-8 p-0"
                        >
                          <FlagOff className="h-4 w-4 text-destructive" />
                          <span className="sr-only">Break Streak</span>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleRemoveMember(member.id)}
                          className="h-8 w-8 p-0"
                        >
                          <UserMinus className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Remove Member</span>
                        </Button>
                      </div>
                    )}
                    
                    {member.id === "user123" && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleBreakStreak(member.id)}
                        className="h-8 w-8 p-0"
                      >
                        <FlagOff className="h-4 w-4 text-destructive" />
                        <span className="sr-only">Break Streak (Demo)</span>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-2">
              <h3 className="text-sm font-medium mb-2">Add Member</h3>
              <div className="flex gap-2">
                <Input 
                  placeholder="Member ID" 
                  value={memberIdInput}
                  onChange={(e) => setMemberIdInput(e.target.value)}
                />
                <Button onClick={handleAddMember} size="icon">
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
      
      {hasGroup && !breakerId && (
        <CardFooter className="bg-muted/50 text-xs text-muted-foreground rounded-b-lg">
          <div className="flex items-center gap-1">
            <Flag className="h-3 w-3" />
            <span>If one member breaks the streak, everyone's streak resets</span>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
