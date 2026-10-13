import sys

with open('temp_original_clean.txt', 'r', encoding='utf-16-le') as f:
    content = f.read()

lines = content.splitlines()
print('Number of lines:', len(lines))
print('Lines 570-585:')
for i in range(570, 585):
    if i < len(lines):
        print(f'{i}: {repr(lines[i])}')
    else:
        print(f'{i}: (out of range)')

old_block = '''{speechFeedback && (
  <div className=\"whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4\">
    <p className=\"mb-2 font-semibold\">AI Feedback on Speech</p>
    {speechFeedback}
  </div>
)}'''
old_block_lines = old_block.splitlines()
print()
print('Old block lines:')
for i, line in enumerate(old_block_lines):
    print(f'{i}: {repr(line)}')
