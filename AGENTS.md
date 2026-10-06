# Architecture rules
- Import uploaded header and share images through Lovable Assets pointers; keep the derived favicon as a small real file in public so browsers can load it directly.
- Keep site-wide cursor and pointer glow behavior in the shared CustomCursor, using global CSS tokens and fine-pointer detection so every page behaves consistently without affecting touch input.