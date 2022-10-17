string = input("Enter a string: ")
frequency = {}
for char in string:
  if char in frequency:
    frequency[char] += 1
  else:
    frequency[char] = 1

frequency = dict(sorted(frequency.items(), key=lambda item: item[1], reverse=True))

str2 = ''
for i in list(frequency.keys()):
  str2 += i * frequency[i]

print(str2)
