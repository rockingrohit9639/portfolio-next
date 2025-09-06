'use client';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { useState } from 'react';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

type CodeBlockProps = {
  code: string;
};

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="bg-code-background rounded-md p-4 relative w-full overflow-hidden">
      <button
        type="button"
        className="absolute right-4 top-4 cursor-pointer p-1 hover:bg-muted/40 rounded-sm z-10"
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>

      <div className="w-full overflow-auto scrollbar-none">
        <pre>
          <code
            // biome-ignore lint/security/noDangerouslySetInnerHtml: my code is safe
            dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code).value }}
          />
        </pre>
      </div>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <title>Copy to clipboard</title>
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <title>Copied to clipboard</title>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
