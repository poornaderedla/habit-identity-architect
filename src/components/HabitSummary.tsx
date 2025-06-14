
import React from "react";
import { Sparkle } from "./Sparkle";

export interface HabitInputs {
  identity: string;
  ageGroup: string;
  role: string;
  habit: string;
  struggles: string[];
  cueWhere?: string;
  cueWhen?: string;
  stack?: string;
  rewardWhy?: string;
  rewardPair?: string;
  easyAction?: string;
  twoMin?: string;
  streakHow?: string;
  rewardWhat?: string;
}

export const HabitSummary: React.FC<{
  inputs: HabitInputs;
  completedSteps: number;
  totalSteps: number;
}> = ({ inputs, completedSteps, totalSteps }) => {
  // Generate dynamic example outputs based on what user has filled
  const lines: React.ReactNode[] = [];

  if (inputs.identity) {
    lines.push(
      <div>
        <b>Identity:</b> I am becoming{" "}
        <span className="text-primary font-medium">
          {inputs.identity}
        </span>.
      </div>
    );
  }
  if (inputs.habit) {
    lines.push(
      <div>
        <b>Habit:</b> <span className="text-primary font-medium">{inputs.habit}</span>
      </div>
    );
  }
  // Modules' sample outputs
  if (inputs.cueWhere || inputs.cueWhen || inputs.stack) {
    const stackText = inputs.stack ? ` After ${inputs.stack},` : "";
    let whereWhen = [inputs.cueWhere, inputs.cueWhen].filter(Boolean).join(", ");
    lines.push(
      <div>
        <b>Obvious:</b>
        <span className="ml-1">
          {stackText} I’ll do it {whereWhen && `at ${whereWhen}`}.
        </span>
      </div>
    );
  }
  if (inputs.rewardWhy || inputs.rewardPair) {
    lines.push(
      <div>
        <b>Attractive:</b>
        <span className="ml-1">
          {inputs.rewardWhy ? inputs.rewardWhy + "." : ""}
          {inputs.rewardPair ? " Paired with: " + inputs.rewardPair : ""}
        </span>
      </div>
    );
  }
  if (inputs.easyAction || inputs.twoMin) {
    lines.push(
      <div>
        <b>Easy:</b>
        <span className="ml-1">
          {inputs.easyAction
            ? inputs.easyAction
            : ""}
          {inputs.twoMin ? " (2-min Starter: " + inputs.twoMin + ")" : ""}
        </span>
      </div>
    );
  }
  if (inputs.streakHow || inputs.rewardWhat) {
    lines.push(
      <div>
        <b>Satisfying:</b>
        <span className="ml-1">
          {inputs.streakHow ? inputs.streakHow + "." : ""}
          {inputs.rewardWhat ? " Reward: " + inputs.rewardWhat : ""}
        </span>
      </div>
    );
  }

  return (
    <div className="sticky top-8 z-10 bg-card/95 shadow-lg rounded-2xl border border-muted px-5 py-4 max-w-xs w-full transition-all animate-fade-in">
      <div className="text-lg font-semibold mb-1 flex items-center gap-2">
        <Sparkle show={completedSteps >= totalSteps} />
        Your Habit Blueprint
      </div>
      <div className="space-y-3 text-sm">{lines}</div>
      <div className="mt-4 flex flex-col gap-2">
        <button
          className="bg-primary/90 hover:bg-primary text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors"
          disabled
          aria-disabled
        >
          Export as PDF (soon)
        </button>
        <button
          className="bg-accent hover:bg-accent/60 text-primary font-semibold rounded-lg px-4 py-2 text-sm transition-colors"
          disabled
          aria-disabled
        >
          Add to Notion/Calendar (soon)
        </button>
      </div>
      <div className="text-xs text-muted-foreground mt-3">
        Save & progress tracking coming soon.
      </div>
    </div>
  );
};
