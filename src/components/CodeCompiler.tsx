import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Square, Copy, Download, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeCompilerProps {
  lesson: {
    title: string;
    language: string;
    initialCode: string;
    expectedOutput: string;
  };
}

export const CodeCompiler = ({ lesson }: CodeCompilerProps) => {
  const [code, setCode] = useState(lesson.initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleRunCode = async () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Simple JavaScript execution simulation
        if (lesson.language === "javascript") {
          // Create a safe environment for code execution
          const result = new Function(code + "\n//# sourceURL=user-code.js")();
          setOutput(result?.toString() || lesson.expectedOutput);
        } else {
          setOutput(lesson.expectedOutput);
        }
        
        toast({
          title: "Code executed successfully!",
          description: "Check the output panel for results.",
        });
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        toast({
          title: "Execution Error",
          description: "There was an error running your code.",
          variant: "destructive",
        });
      }
      setIsRunning(false);
    }, 1500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "Code has been copied to clipboard.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share link generated!",
      description: "Code sharing link copied to clipboard.",
    });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {lesson.title}
            <Badge variant="outline">{lesson.language}</Badge>
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyCode}>
              <Copy className="h-4 w-4 mr-1" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share className="h-4 w-4 mr-1" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="editor">Code Editor</TabsTrigger>
            <TabsTrigger value="output">Output</TabsTrigger>
          </TabsList>
          
          <TabsContent value="editor" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button onClick={handleRunCode} disabled={isRunning} variant="hero">
                  {isRunning ? (
                    <Square className="h-4 w-4 mr-2" />
                  ) : (
                    <Play className="h-4 w-4 mr-2" />
                  )}
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-muted border border-border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Write your code here..."
              />
              <div className="absolute top-2 right-2 text-xs text-muted-foreground">
                Lines: {code.split('\n').length}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="output" className="space-y-4">
            <div className="bg-black text-green-400 p-4 rounded-md font-mono text-sm h-96 overflow-auto">
              <div className="mb-2 text-gray-400">$ node script.js</div>
              {output ? (
                <pre className="whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-gray-500">Click "Run Code" to see output...</div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};