import sys

old_block = '''{speechFeedback && (
  <div className=\"whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4\">
    <p className=\"mb-2 font-semibold\">AI Feedback on Speech</p>
    {speechFeedback}
  </div>
)}'''

print('Old block repr:', repr(old_block))
print('Old block length:', len(old_block))

with open('temp_original_clean.txt', 'r', encoding='utf-16-le') as f:
    content = f.read()

print('Content first 200 chars:', repr(content[:200]))
print('Content length:', len(content))

if old_block in content:
    print('Old block found')
else:
    print('Old block not found')
    # Let's try to see if we can find a substring
    # Look for the first line of the old block
    first_line = old_block.split('\\n')[0]
    print('First line of old block:', repr(first_line))
    if first_line in content:
        print('First line found')
    else:
        print('First line not found')
