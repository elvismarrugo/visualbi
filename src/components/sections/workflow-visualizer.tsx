"use client";

import { useFormState, useFormStatus } from "react-dom";
import Image from "next/image";
import { Bot, RefreshCw, Send } from "lucide-react";

import { handleVisualizeWorkflow } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Skeleton } from "../ui/skeleton";

const initialState = {
  message: "",
  data: null as { workflowDiagramDataUri: string } | null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Visualize Workflow
        </>
      )}
    </Button>
  );
}

export default function WorkflowVisualizerSection() {
  const [state, formAction] = useFormState(handleVisualizeWorkflow, initialState);

  return (
    <section id="visualizer" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <div className="inline-block rounded-full bg-primary/10 p-3">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-4 font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
              AI-Powered Workflow Visualizer
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Describe your current business process, and our AI will generate a proposed automated workflow, highlighting areas for improvement.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          <Card>
            <form action={formAction}>
              <CardHeader>
                <CardTitle>Describe Your Process</CardTitle>
                <CardDescription>
                  Be as detailed as possible for the best results. For example: "We receive orders via email, manually enter them into a spreadsheet, then create an invoice in another system."
                </CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="grid w-full gap-2">
                    <Label htmlFor="processDescription" className="sr-only">Process Description</Label>
                    <Textarea
                      id="processDescription"
                      name="processDescription"
                      placeholder="Type your business process here..."
                      rows={8}
                      required
                    />
                    {state.errors?.processDescription && (
                      <p className="text-sm text-destructive">{state.errors.processDescription[0]}</p>
                    )}
                  </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          <Card className="min-h-[300px]">
            <CardHeader>
              <CardTitle>Proposed Automated Workflow</CardTitle>
              <CardDescription>
                Your generated workflow diagram will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg border-2 border-dashed bg-background flex items-center justify-center">
                {useFormStatus().pending ? (
                   <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-8 w-8 animate-spin" />
                    <p>AI is generating your diagram...</p>
                  </div>
                ) : state.data?.workflowDiagramDataUri ? (
                  <Image
                    src={state.data.workflowDiagramDataUri}
                    alt="Generated workflow diagram"
                    width={512}
                    height={288}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <Bot className="h-8 w-8" />
                    <p>Waiting for process description</p>
                  </div>
                )}
                {state.message && state.message !== 'Success' && !state.errors && (
                    <p className="p-4 text-center text-destructive">{state.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
