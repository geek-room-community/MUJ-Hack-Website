import { ProblemStatement } from "@/types/problems";

interface CardContentProps extends ProblemStatement {
  className?: string;
}

export const CardContent = ({
  title,
  category,
  description,
  Statement,
  Submission,
  className,
}: CardContentProps) => (
  <div
    className={`${className} overflow-clip bg-secondary rounded-3xl px-4 py-6 grid grid-rows-[auto_auto_auto_1fr] sm:gap-2 md:gap-4`}
  >
    <h4 className="font-bold text-lg md:text-xl xl:text-2xl italic tracking-wide relative overflow-hidden group flex justify-center items-center text-white">
      <span className="group-hover:opacity-0 opacity-100 transition-all duration-300">
        Problem
      </span>
      <span className="absolute left-0 top-0 w-0 h-full bg-accent/5 group-hover:w-full transition-all duration-500 overflow-hidden rounded-xl flex justify-center items-center">
        Statement
      </span>
    </h4>

    <h3 className="capitalize font-medium text-slate-200 text-sm md:text-lg py-2">
      {title}
    </h3>

    <p className="text-left py-6 tracking-wide text-sm sm:text-base md:text-lg font-light">
      <span className="font-semibold text-pink">Category: </span>
      <span className="text-slate-200 capitalize">{category}</span>
    </p>

    <p className="text-slate-200 text-left text-pretty sm:my-4 text-[0.85rem] sm:text-base flex items-center">
      {description}
    </p>

    <p className="text-slate-200 text-left text-pretty sm:my-2 my-3 text-[0.85rem] sm:text-base flex items-center">
      Problem Statement :<a
        href={Statement}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink hover:text-white transition-all duration-300"
      >{Statement}</a>
    </p>

    <p className="text-slate-200 text-left text-pretty sm:my-2 my-3 text-[0.85rem] sm:text-base flex items-center">
      Submission :<a
        href={Submission}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink hover:text-white transition-all duration-300"
      >{Submission}</a>
    </p>
  </div>
);