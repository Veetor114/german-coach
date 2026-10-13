import sys

with open('temp_original_clean.txt', 'r', encoding='utf-16-le') as f:
    content = f.read()

lines = content.splitlines()

# 1. Add the interface for SpeechFeedbackObject after the existing interfaces.
# We'll use the same method as before to find the interface PracticeControlsProps and add after it.
interface_start = -1
for i, line in enumerate(lines):
    if 'interface PracticeControlsProps {' in line:
        interface_start = i
        break

if interface_start == -1:
    print('Could not find interface PracticeControlsProps')
    sys.exit(1)

brace_count = 0
interface_end = -1
for i in range(interface_start, len(lines)):
    line = lines[i]
    for char in line:
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                interface_end = i
                break
    if interface_end != -1:
        break

if interface_end == -1:
    print('Could not find the end of interface PracticeControlsProps')
    sys.exit(1)

new_interface = '''interface SpeechFeedbackObject {
  corrections: string;
  vocabulary: string;
  grammar: string;
  grammarRating: number;
  vocabularyRating: number;
  fluencyRating: number;
  naturalnessRating: number;
  nextGoal: string;
}'''

lines = lines[:interface_end+1] + [new_interface] + lines[interface_end+1:]

# 2. Replace the speechFeedback display block.
# We'll find the line that contains '{speechFeedback && ('
start_index = -1
for i, line in enumerate(lines):
    if '{speechFeedback && (' in line:
        start_index = i
        break

if start_index == -1:
    print('Could not find the start of the speechFeedback block')
    sys.exit(1)

# Find the end of the JSX expression.
brace_count = 1
paren_count = 1
end_index = -1
for i in range(start_index, len(lines)):
    line = lines[i]
    for char in line:
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
        elif char == '(':
            paren_count += 1
        elif char == ')':
            paren_count -= 1
        if brace_count == 0 and paren_count == 0:
            end_index = i
            break
    if end_index != -1:
        break

if end_index == -1:
    print('Could not find the end of the speechFeedback block')
    sys.exit(1)

# Define the new display block.
new_display = '''      {speechFeedback && (
        <div className="whitespace-pre-wrap rounded-md border-l-4 border-brand-teal bg-muted/60 p-4">
          <p className="mb-2 font-semibold">AI Feedback on Speech</p>
          {typeof speechFeedback === 'string' && speechFeedback.trim().startsWith('{') ? (
            <>
              {() => {
                try {
                  const parsed = JSON.parse(speechFeedback) as SpeechFeedbackObject;
                  return (
                    <>
                      {/* Corrections & Improved Wording */}
                      {parsed.corrections && (
                        <>
                          <p className="font-medium text-brand-teal">Corrections & Improved Wording</p>
                          <p className="text-sm">{parsed.corrections}</p>
                        </>
                      )}
                      {/* Vocabulary to Review */}
                      {parsed.vocabulary && (
                        <>
                          <p className="font-medium text-brand-teal">Vocabulary to Review</p>
                          <p className="text-sm">{parsed.vocabulary}</p>
                        </>
                      )}
                      {/* Grammar Points */}
                      {parsed.grammar && (
                        <>
                          <p className="font-medium text-brand-teal">Grammar Points</p>
                          <p className="text-sm">{parsed.grammar}</p>
                        </>
                      )}
                      {/* Skill Ratings */}
                      <div>
                        <p className="font-medium text-brand-teal">Skill Ratings</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>Grammar: <div className="w-full h-2 bg-gray-200 rounded"><div className="h-2 bg-brand-teal rounded w-[{}%]"></div></div></div>
                          <div>Vocabulary: <div className="w-full h-2 bg-gray-200 rounded"><div className="h-2 bg-brand-teal rounded w-[{}%]"></div></div></div>
                          <div>Fluency: <div className="w-full h-2 bg-gray-200 rounded"><div className="h-2 bg-brand-teal rounded w-[{}%]"></div></div></div>
                          <div>Naturalness: <div className="w-full h-2 bg-gray-200 rounded"><div className="h-2 bg-brand-teal rounded w-[{}%]"></div></div></div>
                          <div>Pronunciation: Assess via audio</div>
                        </div>
                      </div>
                      {/* Next Practice Goal */}
                      {parsed.nextGoal && (
                        <>
                          <p className="font-medium text-brand-teal">Next Practice Goal</p>
                          <p className="text-sm">{parsed.nextGoal}</p>
                        </>
                      )}
                    </>
                  );
                } catch (e) {
                  // If parsing fails, show the string
                  return <p>{speechFeedback}</p>;
                }
              }}()
            </>
          ) : (
            // Show the string as before
            <p>{speechFeedback}</p>
          )}
        </div>
      )}'''

new_display_lines = new_display.splitlines()
lines = lines[:start_index] + new_display_lines + lines[end_index+1:]

# Join the lines with actual newline characters.
new_content = '\n'.join(lines)

# Write the new content to the target file.
with open('src/components/practice/practice-controls.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
