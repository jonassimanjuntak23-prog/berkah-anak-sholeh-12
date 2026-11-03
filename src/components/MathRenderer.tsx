import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  block?: boolean;
}

/**
 * Robust KaTeX-based mathematical renderer.
 * Formats inline ($...$) and display mode ($$...$$ or \[...\]) LaTeX equations.
 * Also catches any isolated backslash formulas or fractions to prevent raw LaTeX leaks.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  className = '',
  block = false,
}) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    try {
      // If the content is purely a display formula without delimiters
      if (
        (content.trim().startsWith('\\begin{') ||
          content.trim().startsWith('\\frac') ||
          content.trim().startsWith('\\sum') ||
          content.trim().startsWith('v_') ||
          content.trim().startsWith('E_') ||
          content.trim().startsWith('W_')) &&
        !content.includes('$')
      ) {
        return katex.renderToString(content.trim(), {
          displayMode: block,
          throwOnError: false,
        });
      }

      // Parse tokens for $...$ (inline) and $$...$$ (block)
      // Matches:
      // 1. $$...$$
      // 2. \[...\]
      // 3. $...$
      // 4. \(...\)
      const pattern = /(\$\$(?:[^\$]+?)\$\$|\\\[(?:[\s\S]+?)\\\]|\$(?:[^\$]+?)\$|\\\((?:[\s\S]+?)\\\))/g;
      
      const parts = content.split(pattern);

      const htmlChunks = parts.map((part) => {
        if (!part) return '';

        // Check for block math $$...$$ or \[...\]
        if (
          (part.startsWith('$$') && part.endsWith('$$')) ||
          (part.startsWith('\\[') && part.endsWith('\\]'))
        ) {
          const rawFormula = part.startsWith('$$')
            ? part.slice(2, -2)
            : part.slice(2, -2);
          try {
            return katex.renderToString(rawFormula.trim(), {
              displayMode: true,
              throwOnError: false,
            });
          } catch (e) {
            return `<div class="font-mono text-center text-amber-900 bg-amber-50 p-2 rounded">${escapeHtml(rawFormula)}</div>`;
          }
        }

        // Check for inline math $...$ or \(...\)
        if (
          (part.startsWith('$') && part.endsWith('$')) ||
          (part.startsWith('\\(') && part.endsWith('\\)'))
        ) {
          const rawFormula = part.startsWith('$')
            ? part.slice(1, -1)
            : part.slice(2, -2);
          try {
            return katex.renderToString(rawFormula.trim(), {
              displayMode: false,
              throwOnError: false,
            });
          } catch (e) {
            return `<span class="font-mono text-amber-900 bg-amber-50 px-1 rounded">${escapeHtml(rawFormula)}</span>`;
          }
        }

        // Clean normal text, safely replace newlines with line breaks or paragraphs
        return escapeHtml(part).replace(/\n/g, '<br />');
      });

      return htmlChunks.join('');
    } catch (err) {
      // Fallback: replace basic LaTeX syntax safely
      return escapeHtml(content);
    }
  }, [content, block]);

  return (
    <div
      className={`math-rendered inline-block max-w-full overflow-x-auto align-baseline text-slate-800 leading-relaxed ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default MathRenderer;
