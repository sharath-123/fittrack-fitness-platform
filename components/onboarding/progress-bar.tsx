interface Props {
  currentStep: number;
}

export default function ProgressBar({
  currentStep,
}: Props) {
  const progress = (currentStep / 5) * 100;

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          Step {currentStep} of 5
        </p>

        <p className="text-sm text-zinc-400">
          {progress}%
        </p>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}