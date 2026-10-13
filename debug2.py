import sys

old_block = '''{speechFeedback && (
  <div className=\"whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4\">
    <p className=\"mb-2 font-semibold\">AI Feedback on Speech</p>
    {speechFeedback}
  </div>
)}'''

with open('temp_original_clean.txt', 'r', encoding='utf-16-le') as f:
    content = f.read()

# Split into lines
lines = content.split('\\n')
# We want lines 575 to 580 (0-indexed) -> 6 lines
block_lines = lines[575:575+6]
block = '\\n'.join(block_lines)
print('Block from lines 575-580:')
print(repr(block))
print('Old block:')
print(repr(old_block))
print('Are they equal?', block == old_block)
if block != old_block:
    print('Differences:')
    for i, (c1, c2) in enumerate(zip(block, old_block)):
        if c1 != c2:
            print('  Position {}: block={!r} old_block={!r}'.format(i, c1, c2))
            break
