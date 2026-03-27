---
description: "Use when writing or revising markdown notes, study notes, summaries, or knowledge-base content. Applies The Outline Method and note-taking best practices for clear, scannable markdown files."
name: "Markdown Notes Guidelines"
applyTo: "**/*.md"
---

# Markdown Notes Guidelines

- Structure notes with The Outline Method: start with the main topic, break it into ordered sections, and place supporting details under the most specific relevant heading.
- Use clear heading hierarchy so the outline can be scanned quickly: # for the topic, ## for major sections, ### for subtopics, and lists for supporting points.
- Keep notes concise and information-dense. Prefer short statements, bullets, and compact examples over long narrative paragraphs.
- Put the key takeaway near the top when the topic is broad or the reader needs a quick summary.
- Separate definitions, examples, caveats, and action items so each serves a single purpose.
- Capture one idea per bullet when possible. Split overloaded bullets instead of packing several concepts into one line.
- Preserve factual wording for technical terms, commands, limits, and names. Do not paraphrase in ways that reduce precision.
- Use tables only when they clarify comparisons, tradeoffs, or structured facts better than bullets.
- Add examples only when they make the note easier to apply or remember.
- Call out warnings, exceptions, and open questions explicitly instead of burying them inside general prose.
- Remove filler, repetition, and decorative wording that does not improve recall or understanding.
- When editing existing notes, improve structure and readability without dropping important context.

## Concision Rules

- Summary block: 1 to 2 sentences, usually 20 to 50 words total.
- Standard bullet: 1 sentence only, usually 5 to 18 words.
- Complex bullet: up to 2 sentences only when the second sentence adds a necessary qualifier, exception, or consequence.
- Do not exceed 30 words in a bullet unless the exact command, limit, or technical wording requires it.
- Paragraphs are the fallback, not the default. If a paragraph is necessary, keep it to 2 sentences maximum and usually under 60 words.
- Each heading should have 2 to 5 bullets when possible. If a section grows past 6 bullets, split it into subheadings.
- Examples should be short: 1 bullet or 3 lines of code unless a longer example is needed to avoid ambiguity.
- Warnings, caveats, and exceptions should be 1 bullet each, not folded into a general explanation.
- If a bullet contains "and", "but", or multiple commas describing different ideas, consider splitting it into separate bullets.
- Prefer fragments only for checklists or labels. Use full sentences for explanatory notes.

## Preferred Shape

Use this shape unless the existing file already has a stronger structure:

# Topic

> One- to two-sentence summary of the key point.

## Core Concepts

- Main idea
- Main idea

## Details

### Subtopic

- Supporting fact
- Example or caveat

## Practical Notes

- Decision, action item, warning, or checklist item

## Avoid

- Flat note dumps with no heading structure
- Long paragraphs that mix summary, detail, and examples together
- Repeating the same concept in multiple sections without adding value
- Headings that do not reflect the actual outline of the content
