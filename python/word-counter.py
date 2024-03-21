import re
s = "java, javascript, java, javascript"

print( len( re.findall('\\bjava[., \\n\\t]?\\b', s) ) )
