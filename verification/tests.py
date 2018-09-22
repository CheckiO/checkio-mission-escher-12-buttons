"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input":'''
001203
023001
100220''',
            "answer": [8, 4, 4, 1]
        },
        {
            "input":'''
065209
021009
101119''',
            "answer": [30, 16, 1]
        }
    ],
    "Extra": [
        {
            "input":'''
000000
000055
000055''',
            "answer": [20]
        },
        {
            "input":'''
908070
060504
302010''',
            "answer": [9, 8, 7, 6, 5, 4, 3, 2, 1]
        },
        {
            "input":'''
111504
098006
700225''',
            "answer": [25, 19, 7]
        },
        {
            "input":'''
221209
020060
900220''',
            "answer": [10, 9, 9, 9]
        },
        {
            "input":'''
11090000
03006040
03000000
02235910''',
            "answer": [30, 9, 6, 4]
        },
        {
            "input":'''
22
01
30''',
            "answer": [5, 3]
        },
        {
            "input":'''
1''',
            "answer": [1]
        },
        {
            "input":'''
1010
0101''',
            "answer": [1, 1, 1, 1]
        }

    ]
}
