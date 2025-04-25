
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Clock, DollarSign, Bell, AlertTriangle, Zap, Shield } from "lucide-react";

const FocusMode = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const [focusTime, setFocusTime] = useState(30); // minutes
  const [stakeAmount, setStakeAmount] = useState(5); // default $5
  const [isTracking, setIsTracking] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  
  const handleStartFocus = () => {
    if (!taskDescription) {
      toast.error("Please enter a task description");
      return;
    }
    
    setIsTracking(true);
    setTimeRemaining(focusTime * 60); // Convert to seconds
    
    toast.success(`Focus mode started: ${taskDescription}`);
    
    // In a real app, we would start a timer and track distractions
    // For the demo, we'll simulate a successful focus session
    setTimeout(() => {
      setIsTracking(false);
      toast.success("Focus session completed successfully! Your stake is safe.");
    }, 10000); // Mock completion after 10 seconds instead of actual focus time
  };
  
  const handleCancelFocus = () => {
    setIsTracking(false);
    toast.info("Focus session cancelled. Your stake has been returned.");
  };
  
  // Format time remaining as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Focus Mode</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Boost your productivity by staking money on your focus sessions.
            Stay focused or your stake gets donated.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Set Up Your Focus Session</CardTitle>
                <CardDescription>
                  Define your task, focus time, and stake amount.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!isTracking ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="task">
                        What will you focus on?
                      </label>
                      <Input
                        id="task"
                        placeholder="e.g., Complete 10 learning cards"
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        disabled={isTracking}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Focus Time: {focusTime} minutes
                      </label>
                      <Slider
                        defaultValue={[focusTime]}
                        max={120}
                        min={5}
                        step={5}
                        onValueChange={(value) => setFocusTime(value[0])}
                        disabled={isTracking}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>5 min</span>
                        <span>1 hour</span>
                        <span>2 hours</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Stake Amount: ${stakeAmount}
                      </label>
                      <Slider
                        defaultValue={[stakeAmount]}
                        max={20}
                        min={1}
                        step={1}
                        onValueChange={(value) => setStakeAmount(value[0])}
                        disabled={isTracking}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>$1</span>
                        <span>$10</span>
                        <span>$20</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={handleStartFocus}
                    >
                      <Zap className="mr-2 h-4 w-4" />
                      Start Focus Session
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-8 py-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">
                        {formatTime(timeRemaining)}
                      </div>
                      <p className="text-muted-foreground">Remaining Time</p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <h3 className="font-medium mb-1">Current Task</h3>
                      <p>{taskDescription}</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span className="font-medium">${stakeAmount} at stake</span>
                    </div>
                    
                    <div className="bg-destructive/10 rounded-lg p-4 mb-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-destructive mb-1">Stay Focused!</h3>
                          <p className="text-sm text-muted-foreground">
                            If you switch to social media apps for more than 5 minutes, 
                            your stake will be donated.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={handleCancelFocus}
                    >
                      Cancel Focus Session
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Focus Stats</CardTitle>
                <CardDescription>
                  Your focus history and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Total Focus Time</span>
                    </div>
                    <span className="font-medium">5h 23m</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>Focus Sessions</span>
                    </div>
                    <span className="font-medium">12</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-primary" />
                      <span>Distractions</span>
                    </div>
                    <span className="font-medium">3</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span>Money Saved</span>
                    </div>
                    <span className="font-medium">$45</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-destructive" />
                      <span>Money Lost</span>
                    </div>
                    <span className="font-medium">$10</span>
                  </div>
                </div>
                
                <div className="border-t mt-6 pt-6">
                  <h3 className="font-medium mb-3">Recent Focus Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-medium">Complete React tutorial</p>
                        <p className="text-xs text-muted-foreground">Today, 45 minutes</p>
                      </div>
                      <Shield className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-medium">Study machine learning</p>
                        <p className="text-xs text-muted-foreground">Yesterday, 1 hour</p>
                      </div>
                      <Shield className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-medium">Complete final project</p>
                        <p className="text-xs text-muted-foreground">3 days ago, 2 hours</p>
                      </div>
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FocusMode;
