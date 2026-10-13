import sys

with open('temp_original_clean.txt', 'r', encoding='utf-16-le') as f:
    content = f.read()

lines = content.splitlines()
print('Number of lines:', len(lines))
for i in range(570, 585):
    if i < len(lines):
        print(f'{i}: {repr(lines[i])}')
    else:
        print(f'{i}: (out of range)')
