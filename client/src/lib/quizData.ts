export type Choice = { label: string; text: string; correct: boolean };
export type QuizQuestion = { id: number; question: string; choices: Choice[] };

export const quizQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "What is the main purpose of file organization?",
    "choices": [
      {
        "label": "A",
        "text": "To arrange and access data efficiently",
        "correct": true
      },
      {
        "label": "B",
        "text": "To increase CPU speed",
        "correct": false
      },
      {
        "label": "C",
        "text": "To replace RAM",
        "correct": false
      },
      {
        "label": "D",
        "text": "To encrypt every file",
        "correct": false
      }
    ]
  },
  {
    "id": 2,
    "question": "Which C++ stream is primarily used for reading from a file?",
    "choices": [
      {
        "label": "A",
        "text": "ofstream",
        "correct": false
      },
      {
        "label": "B",
        "text": "ifstream",
        "correct": true
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": false
      },
      {
        "label": "D",
        "text": "ostream",
        "correct": false
      }
    ]
  },
  {
    "id": 3,
    "question": "Which C++ stream is primarily used for writing to a file?",
    "choices": [
      {
        "label": "A",
        "text": "ifstream",
        "correct": false
      },
      {
        "label": "B",
        "text": "ofstream",
        "correct": true
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": false
      },
      {
        "label": "D",
        "text": "istream",
        "correct": false
      }
    ]
  },
  {
    "id": 4,
    "question": "Which C++ stream can perform both input and output?",
    "choices": [
      {
        "label": "A",
        "text": "ifstream",
        "correct": false
      },
      {
        "label": "B",
        "text": "ofstream",
        "correct": false
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": true
      },
      {
        "label": "D",
        "text": "FILE",
        "correct": false
      }
    ]
  },
  {
    "id": 5,
    "question": "Which fopen mode is used for reading?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": true
      },
      {
        "label": "B",
        "text": "w",
        "correct": false
      },
      {
        "label": "C",
        "text": "a",
        "correct": false
      },
      {
        "label": "D",
        "text": "x",
        "correct": false
      }
    ]
  },
  {
    "id": 6,
    "question": "Which fopen mode is used for writing?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": false
      },
      {
        "label": "B",
        "text": "w",
        "correct": true
      },
      {
        "label": "C",
        "text": "a",
        "correct": false
      },
      {
        "label": "D",
        "text": "x",
        "correct": false
      }
    ]
  },
  {
    "id": 7,
    "question": "Which fopen mode is used for appending?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": false
      },
      {
        "label": "B",
        "text": "w",
        "correct": false
      },
      {
        "label": "C",
        "text": "a",
        "correct": true
      },
      {
        "label": "D",
        "text": "x",
        "correct": false
      }
    ]
  },
  {
    "id": 8,
    "question": "What is the smallest addressable unit of a disk?",
    "choices": [
      {
        "label": "A",
        "text": "Track",
        "correct": false
      },
      {
        "label": "B",
        "text": "Sector",
        "correct": true
      },
      {
        "label": "C",
        "text": "Cylinder",
        "correct": false
      },
      {
        "label": "D",
        "text": "Platter",
        "correct": false
      }
    ]
  },
  {
    "id": 9,
    "question": "A cylinder is best described as:",
    "choices": [
      {
        "label": "A",
        "text": "A set of sectors in one track",
        "correct": false
      },
      {
        "label": "B",
        "text": "A set of tracks at the same radius",
        "correct": true
      },
      {
        "label": "C",
        "text": "A single platter",
        "correct": false
      },
      {
        "label": "D",
        "text": "A single disk head",
        "correct": false
      }
    ]
  },
  {
    "id": 10,
    "question": "Which organization provides faster access to specific records by using an index?",
    "choices": [
      {
        "label": "A",
        "text": "Sequential",
        "correct": false
      },
      {
        "label": "B",
        "text": "Indexed",
        "correct": true
      },
      {
        "label": "C",
        "text": "Stream",
        "correct": false
      },
      {
        "label": "D",
        "text": "Text",
        "correct": false
      }
    ]
  },
  {
    "id": 11,
    "question": "Which organization is most suitable when records are processed in order?",
    "choices": [
      {
        "label": "A",
        "text": "Sequential",
        "correct": true
      },
      {
        "label": "B",
        "text": "Indexed",
        "correct": false
      },
      {
        "label": "C",
        "text": "Direct only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-value",
        "correct": false
      }
    ]
  },
  {
    "id": 12,
    "question": "What is the main advantage of fixed-length records?",
    "choices": [
      {
        "label": "A",
        "text": "Fast direct access",
        "correct": true
      },
      {
        "label": "B",
        "text": "Unlimited flexibility",
        "correct": false
      },
      {
        "label": "C",
        "text": "No storage overhead",
        "correct": false
      },
      {
        "label": "D",
        "text": "No padding",
        "correct": false
      }
    ]
  },
  {
    "id": 13,
    "question": "What is a common disadvantage of fixed-length fields?",
    "choices": [
      {
        "label": "A",
        "text": "Wasted space",
        "correct": true
      },
      {
        "label": "B",
        "text": "No simple implementation",
        "correct": false
      },
      {
        "label": "C",
        "text": "No direct access",
        "correct": false
      },
      {
        "label": "D",
        "text": "They cannot store text",
        "correct": false
      }
    ]
  },
  {
    "id": 14,
    "question": "Which method places the field length before the field?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed length",
        "correct": false
      },
      {
        "label": "B",
        "text": "Length indicator",
        "correct": true
      },
      {
        "label": "C",
        "text": "Delimiter",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-value",
        "correct": false
      }
    ]
  },
  {
    "id": 15,
    "question": "Which method uses a special character to separate fields?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed length",
        "correct": false
      },
      {
        "label": "B",
        "text": "Length indicator",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiter",
        "correct": true
      },
      {
        "label": "D",
        "text": "Indexed",
        "correct": false
      }
    ]
  },
  {
    "id": 16,
    "question": "Which method stores data in the form keyword=value?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed length",
        "correct": false
      },
      {
        "label": "B",
        "text": "Delimiter",
        "correct": false
      },
      {
        "label": "C",
        "text": "Keyword-value",
        "correct": true
      },
      {
        "label": "D",
        "text": "Sequential",
        "correct": false
      }
    ]
  },
  {
    "id": 17,
    "question": "What does ios::in mean?",
    "choices": [
      {
        "label": "A",
        "text": "Input",
        "correct": true
      },
      {
        "label": "B",
        "text": "Index",
        "correct": false
      },
      {
        "label": "C",
        "text": "Insert",
        "correct": false
      },
      {
        "label": "D",
        "text": "Integer",
        "correct": false
      }
    ]
  },
  {
    "id": 18,
    "question": "What does ios::out mean?",
    "choices": [
      {
        "label": "A",
        "text": "Output",
        "correct": true
      },
      {
        "label": "B",
        "text": "Open track",
        "correct": false
      },
      {
        "label": "C",
        "text": "Object",
        "correct": false
      },
      {
        "label": "D",
        "text": "Offset",
        "correct": false
      }
    ]
  },
  {
    "id": 19,
    "question": "What does ios:: app mean?",
    "choices": [
      {
        "label": "A",
        "text": "Append",
        "correct": true
      },
      {
        "label": "B",
        "text": "Access pointer",
        "correct": false
      },
      {
        "label": "C",
        "text": "Application",
        "correct": false
      },
      {
        "label": "D",
        "text": "Array pointer",
        "correct": false
      }
    ]
  },
  {
    "id": 20,
    "question": "What can happen if a program terminates abnormally before a file is closed?",
    "choices": [
      {
        "label": "A",
        "text": "Data may be lost",
        "correct": true
      },
      {
        "label": "B",
        "text": "The disk becomes larger",
        "correct": false
      },
      {
        "label": "C",
        "text": "RAM becomes permanent",
        "correct": false
      },
      {
        "label": "D",
        "text": "The file becomes a cylinder",
        "correct": false
      }
    ]
  },
  {
    "id": 21,
    "question": "What is the smallest unit of data?",
    "choices": [
      {
        "label": "A",
        "text": "Byte",
        "correct": false
      },
      {
        "label": "B",
        "text": "Bit",
        "correct": true
      },
      {
        "label": "C",
        "text": "Kilobyte",
        "correct": false
      },
      {
        "label": "D",
        "text": "Record",
        "correct": false
      }
    ]
  },
  {
    "id": 22,
    "question": "How many bits are in one byte?",
    "choices": [
      {
        "label": "A",
        "text": "4",
        "correct": false
      },
      {
        "label": "B",
        "text": "8",
        "correct": true
      },
      {
        "label": "C",
        "text": "16",
        "correct": false
      },
      {
        "label": "D",
        "text": "32",
        "correct": false
      }
    ]
  },
  {
    "id": 23,
    "question": "Which is a binary number?",
    "choices": [
      {
        "label": "A",
        "text": "0123",
        "correct": false
      },
      {
        "label": "B",
        "text": "10110",
        "correct": true
      },
      {
        "label": "C",
        "text": "AB10",
        "correct": false
      },
      {
        "label": "D",
        "text": "9876",
        "correct": false
      }
    ]
  },
  {
    "id": 24,
    "question": "According to the lecture, one kilobyte is approximately:",
    "choices": [
      {
        "label": "A",
        "text": "100 bytes",
        "correct": false
      },
      {
        "label": "B",
        "text": "1,000 bytes",
        "correct": true
      },
      {
        "label": "C",
        "text": "10,000 bytes",
        "correct": false
      },
      {
        "label": "D",
        "text": "1,000,000 bytes",
        "correct": false
      }
    ]
  },
  {
    "id": 25,
    "question": "What happens to temporary data in RAM when the computer is switched off?",
    "choices": [
      {
        "label": "A",
        "text": "It is retained permanently",
        "correct": false
      },
      {
        "label": "B",
        "text": "It is lost",
        "correct": true
      },
      {
        "label": "C",
        "text": "It becomes a text file",
        "correct": false
      },
      {
        "label": "D",
        "text": "It moves to the CPU",
        "correct": false
      }
    ]
  },
  {
    "id": 26,
    "question": "Which is an example of permanent storage?",
    "choices": [
      {
        "label": "A",
        "text": "RAM",
        "correct": false
      },
      {
        "label": "B",
        "text": "Hard drive",
        "correct": true
      },
      {
        "label": "C",
        "text": "CPU register",
        "correct": false
      },
      {
        "label": "D",
        "text": "Cache",
        "correct": false
      }
    ]
  },
  {
    "id": 27,
    "question": "Hard disk platters have a:",
    "choices": [
      {
        "label": "A",
        "text": "Magnetic coating",
        "correct": true
      },
      {
        "label": "B",
        "text": "Thermal coating",
        "correct": false
      },
      {
        "label": "C",
        "text": "Plastic-only coating",
        "correct": false
      },
      {
        "label": "D",
        "text": "Liquid coating",
        "correct": false
      }
    ]
  },
  {
    "id": 28,
    "question": "What does a disk head do?",
    "choices": [
      {
        "label": "A",
        "text": "Reads and writes data",
        "correct": true
      },
      {
        "label": "B",
        "text": "Stores the operating system",
        "correct": false
      },
      {
        "label": "C",
        "text": "Rotates the platter",
        "correct": false
      },
      {
        "label": "D",
        "text": "Changes sector size",
        "correct": false
      }
    ]
  },
  {
    "id": 29,
    "question": "A file may be spread across many:",
    "choices": [
      {
        "label": "A",
        "text": "Sectors",
        "correct": true
      },
      {
        "label": "B",
        "text": "CPUs",
        "correct": false
      },
      {
        "label": "C",
        "text": "Keyboards",
        "correct": false
      },
      {
        "label": "D",
        "text": "Compilers",
        "correct": false
      }
    ]
  },
  {
    "id": 30,
    "question": "Which statement about a sector is correct?",
    "choices": [
      {
        "label": "A",
        "text": "It is the largest disk unit",
        "correct": false
      },
      {
        "label": "B",
        "text": "It is the smallest addressable disk unit",
        "correct": true
      },
      {
        "label": "C",
        "text": "It is a collection of cylinders",
        "correct": false
      },
      {
        "label": "D",
        "text": "It is a read/write head",
        "correct": false
      }
    ]
  },
  {
    "id": 31,
    "question": "Tracks are:",
    "choices": [
      {
        "label": "A",
        "text": "Concentric circles on a disk surface",
        "correct": true
      },
      {
        "label": "B",
        "text": "Read/write heads",
        "correct": false
      },
      {
        "label": "C",
        "text": "RAM units",
        "correct": false
      },
      {
        "label": "D",
        "text": "File names",
        "correct": false
      }
    ]
  },
  {
    "id": 32,
    "question": "Which relationship is correct?",
    "choices": [
      {
        "label": "A",
        "text": "Tracks contain sectors",
        "correct": true
      },
      {
        "label": "B",
        "text": "Sectors contain cylinders",
        "correct": false
      },
      {
        "label": "C",
        "text": "Heads contain tracks",
        "correct": false
      },
      {
        "label": "D",
        "text": "Cylinders contain files",
        "correct": false
      }
    ]
  },
  {
    "id": 33,
    "question": "A cylinder is:",
    "choices": [
      {
        "label": "A",
        "text": "A set of tracks at the same radius",
        "correct": true
      },
      {
        "label": "B",
        "text": "A random group of sectors",
        "correct": false
      },
      {
        "label": "C",
        "text": "One read/write head",
        "correct": false
      },
      {
        "label": "D",
        "text": "One file",
        "correct": false
      }
    ]
  },
  {
    "id": 34,
    "question": "Which formula calculates track capacity?",
    "choices": [
      {
        "label": "A",
        "text": "Sectors/track x bytes/sector",
        "correct": true
      },
      {
        "label": "B",
        "text": "Tracks/cylinder x bytes/sector",
        "correct": false
      },
      {
        "label": "C",
        "text": "Cylinders x tracks",
        "correct": false
      },
      {
        "label": "D",
        "text": "Heads x sectors",
        "correct": false
      }
    ]
  },
  {
    "id": 35,
    "question": "Which formula calculates cylinder capacity?",
    "choices": [
      {
        "label": "A",
        "text": "Tracks/cylinder x track capacity",
        "correct": true
      },
      {
        "label": "B",
        "text": "Sectors/track x cylinders",
        "correct": false
      },
      {
        "label": "C",
        "text": "Bytes/sector x cylinders",
        "correct": false
      },
      {
        "label": "D",
        "text": "Heads x sectors",
        "correct": false
      }
    ]
  },
  {
    "id": 36,
    "question": "Which formula calculates total drive capacity?",
    "choices": [
      {
        "label": "A",
        "text": "Cylinders x cylinder capacity",
        "correct": true
      },
      {
        "label": "B",
        "text": "Tracks x sectors only",
        "correct": false
      },
      {
        "label": "C",
        "text": "Heads x bytes",
        "correct": false
      },
      {
        "label": "D",
        "text": "Sectors x heads",
        "correct": false
      }
    ]
  },
  {
    "id": 37,
    "question": "The number of cylinders equals the number of:",
    "choices": [
      {
        "label": "A",
        "text": "Sectors in a track",
        "correct": false
      },
      {
        "label": "B",
        "text": "Tracks in a surface",
        "correct": true
      },
      {
        "label": "C",
        "text": "Heads",
        "correct": false
      },
      {
        "label": "D",
        "text": "Platters only",
        "correct": false
      }
    ]
  },
  {
    "id": 38,
    "question": "Which is an advantage of hard drives?",
    "choices": [
      {
        "label": "A",
        "text": "Large storage capacity",
        "correct": true
      },
      {
        "label": "B",
        "text": "They never fail",
        "correct": false
      },
      {
        "label": "C",
        "text": "They are always faster than RAM",
        "correct": false
      },
      {
        "label": "D",
        "text": "They lose all data when powered off",
        "correct": false
      }
    ]
  },
  {
    "id": 39,
    "question": "Which is a disadvantage of hard drives?",
    "choices": [
      {
        "label": "A",
        "text": "They may fail without warning",
        "correct": true
      },
      {
        "label": "B",
        "text": "They cannot read data",
        "correct": false
      },
      {
        "label": "C",
        "text": "They cannot store files",
        "correct": false
      },
      {
        "label": "D",
        "text": "They have no sectors",
        "correct": false
      }
    ]
  },
  {
    "id": 40,
    "question": "Compared with RAM, a hard drive is generally:",
    "choices": [
      {
        "label": "A",
        "text": "Faster",
        "correct": false
      },
      {
        "label": "B",
        "text": "Slower",
        "correct": true
      },
      {
        "label": "C",
        "text": "The same speed",
        "correct": false
      },
      {
        "label": "D",
        "text": "Not a storage device",
        "correct": false
      }
    ]
  },
  {
    "id": 41,
    "question": "A physical file:",
    "choices": [
      {
        "label": "A",
        "text": "Physically exists on secondary storage",
        "correct": true
      },
      {
        "label": "B",
        "text": "Exists only inside a program",
        "correct": false
      },
      {
        "label": "C",
        "text": "Is always a RAM object",
        "correct": false
      },
      {
        "label": "D",
        "text": "Is a CPU instruction",
        "correct": false
      }
    ]
  },
  {
    "id": 42,
    "question": "A logical file is:",
    "choices": [
      {
        "label": "A",
        "text": "What the program actually uses",
        "correct": true
      },
      {
        "label": "B",
        "text": "The physical disk platter",
        "correct": false
      },
      {
        "label": "C",
        "text": "A sector",
        "correct": false
      },
      {
        "label": "D",
        "text": "A CPU register",
        "correct": false
      }
    ]
  },
  {
    "id": 43,
    "question": "The operating system links the logical file with the:",
    "choices": [
      {
        "label": "A",
        "text": "Physical file or device",
        "correct": true
      },
      {
        "label": "B",
        "text": "Keyboard only",
        "correct": false
      },
      {
        "label": "C",
        "text": "CPU cache only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Compiler only",
        "correct": false
      }
    ]
  },
  {
    "id": 44,
    "question": "A text file is treated as a sequence of:",
    "choices": [
      {
        "label": "A",
        "text": "Characters",
        "correct": true
      },
      {
        "label": "B",
        "text": "Cylinders",
        "correct": false
      },
      {
        "label": "C",
        "text": "Heads",
        "correct": false
      },
      {
        "label": "D",
        "text": "Tracks",
        "correct": false
      }
    ]
  },
  {
    "id": 45,
    "question": "A binary file is treated as a sequence of:",
    "choices": [
      {
        "label": "A",
        "text": "Bytes",
        "correct": true
      },
      {
        "label": "B",
        "text": "Characters only",
        "correct": false
      },
      {
        "label": "C",
        "text": "Tracks",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keywords",
        "correct": false
      }
    ]
  },
  {
    "id": 46,
    "question": "Which is an example of a binary file from the lecture?",
    "choices": [
      {
        "label": "A",
        "text": "Movie or music file",
        "correct": true
      },
      {
        "label": "B",
        "text": "C++ source code only",
        "correct": false
      },
      {
        "label": "C",
        "text": "Plain text note",
        "correct": false
      },
      {
        "label": "D",
        "text": "CSV only",
        "correct": false
      }
    ]
  },
  {
    "id": 47,
    "question": "Opening a file makes it:",
    "choices": [
      {
        "label": "A",
        "text": "Ready for use",
        "correct": true
      },
      {
        "label": "B",
        "text": "Deleted",
        "correct": false
      },
      {
        "label": "C",
        "text": "Encrypted",
        "correct": false
      },
      {
        "label": "D",
        "text": "Compressed",
        "correct": false
      }
    ]
  },
  {
    "id": 48,
    "question": "When a file is opened, the initial position is generally at the:",
    "choices": [
      {
        "label": "A",
        "text": "Beginning",
        "correct": true
      },
      {
        "label": "B",
        "text": "End",
        "correct": false
      },
      {
        "label": "C",
        "text": "Middle",
        "correct": false
      },
      {
        "label": "D",
        "text": "Last sector",
        "correct": false
      }
    ]
  },
  {
    "id": 49,
    "question": "Which fopen mode means reading?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": true
      },
      {
        "label": "B",
        "text": "w",
        "correct": false
      },
      {
        "label": "C",
        "text": "a",
        "correct": false
      },
      {
        "label": "D",
        "text": "q",
        "correct": false
      }
    ]
  },
  {
    "id": 50,
    "question": "Which fopen mode means writing?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": false
      },
      {
        "label": "B",
        "text": "w",
        "correct": true
      },
      {
        "label": "C",
        "text": "a",
        "correct": false
      },
      {
        "label": "D",
        "text": "q",
        "correct": false
      }
    ]
  },
  {
    "id": 51,
    "question": "Which fopen mode means append?",
    "choices": [
      {
        "label": "A",
        "text": "r",
        "correct": false
      },
      {
        "label": "B",
        "text": "w",
        "correct": false
      },
      {
        "label": "C",
        "text": "a",
        "correct": true
      },
      {
        "label": "D",
        "text": "q",
        "correct": false
      }
    ]
  },
  {
    "id": 52,
    "question": "What is the purpose of closing a file?",
    "choices": [
      {
        "label": "A",
        "text": "It releases the logical file name for reuse",
        "correct": true
      },
      {
        "label": "B",
        "text": "It deletes the file",
        "correct": false
      },
      {
        "label": "C",
        "text": "It increases RAM",
        "correct": false
      },
      {
        "label": "D",
        "text": "It changes the file type",
        "correct": false
      }
    ]
  },
  {
    "id": 53,
    "question": "If a file is not closed and the program terminates abnormally:",
    "choices": [
      {
        "label": "A",
        "text": "Data may be lost",
        "correct": true
      },
      {
        "label": "B",
        "text": "The file always becomes read-only",
        "correct": false
      },
      {
        "label": "C",
        "text": "The disk is erased",
        "correct": false
      },
      {
        "label": "D",
        "text": "The CPU stops permanently",
        "correct": false
      }
    ]
  },
  {
    "id": 54,
    "question": "Which class is used for input from files?",
    "choices": [
      {
        "label": "A",
        "text": "ifstream",
        "correct": true
      },
      {
        "label": "B",
        "text": "ofstream",
        "correct": false
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": false
      },
      {
        "label": "D",
        "text": "ostream",
        "correct": false
      }
    ]
  },
  {
    "id": 55,
    "question": "Which class is used for output to files?",
    "choices": [
      {
        "label": "A",
        "text": "ifstream",
        "correct": false
      },
      {
        "label": "B",
        "text": "ofstream",
        "correct": true
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": false
      },
      {
        "label": "D",
        "text": "istream",
        "correct": false
      }
    ]
  },
  {
    "id": 56,
    "question": "Which class can handle both input and output?",
    "choices": [
      {
        "label": "A",
        "text": "fstream",
        "correct": true
      },
      {
        "label": "B",
        "text": "ifstream",
        "correct": false
      },
      {
        "label": "C",
        "text": "ofstream",
        "correct": false
      },
      {
        "label": "D",
        "text": "ostream",
        "correct": false
      }
    ]
  },
  {
    "id": 57,
    "question": "What controls the behavior of file operations when opening a C++ file?",
    "choices": [
      {
        "label": "A",
        "text": "File open modes",
        "correct": true
      },
      {
        "label": "B",
        "text": "Disk tracks",
        "correct": false
      },
      {
        "label": "C",
        "text": "CPU modes",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyboard modes",
        "correct": false
      }
    ]
  },
  {
    "id": 58,
    "question": "ios::in is used for:",
    "choices": [
      {
        "label": "A",
        "text": "Input",
        "correct": true
      },
      {
        "label": "B",
        "text": "Output",
        "correct": false
      },
      {
        "label": "C",
        "text": "Append",
        "correct": false
      },
      {
        "label": "D",
        "text": "Binary encryption",
        "correct": false
      }
    ]
  },
  {
    "id": 59,
    "question": "ios::out is used for:",
    "choices": [
      {
        "label": "A",
        "text": "Output",
        "correct": true
      },
      {
        "label": "B",
        "text": "Input",
        "correct": false
      },
      {
        "label": "C",
        "text": "Indexing",
        "correct": false
      },
      {
        "label": "D",
        "text": "Appending only",
        "correct": false
      }
    ]
  },
  {
    "id": 60,
    "question": "ios::app is used for:",
    "choices": [
      {
        "label": "A",
        "text": "Appending",
        "correct": true
      },
      {
        "label": "B",
        "text": "Reading only",
        "correct": false
      },
      {
        "label": "C",
        "text": "Deleting",
        "correct": false
      },
      {
        "label": "D",
        "text": "Formatting",
        "correct": false
      }
    ]
  },
  {
    "id": 61,
    "question": "ios::binary is used to:",
    "choices": [
      {
        "label": "A",
        "text": "Open a file in binary mode",
        "correct": true
      },
      {
        "label": "B",
        "text": "Encrypt a file",
        "correct": false
      },
      {
        "label": "C",
        "text": "Convert text automatically",
        "correct": false
      },
      {
        "label": "D",
        "text": "Compress a file",
        "correct": false
      }
    ]
  },
  {
    "id": 62,
    "question": "In file.open(fileName, ios::in), ios::in indicates:",
    "choices": [
      {
        "label": "A",
        "text": "Input mode",
        "correct": true
      },
      {
        "label": "B",
        "text": "Output mode",
        "correct": false
      },
      {
        "label": "C",
        "text": "Append mode",
        "correct": false
      },
      {
        "label": "D",
        "text": "Index mode",
        "correct": false
      }
    ]
  },
  {
    "id": 63,
    "question": "Why is file.fail() checked while reading in a loop?",
    "choices": [
      {
        "label": "A",
        "text": "To detect a failed read or end condition",
        "correct": true
      },
      {
        "label": "B",
        "text": "To increase file size",
        "correct": false
      },
      {
        "label": "C",
        "text": "To change the file mode",
        "correct": false
      },
      {
        "label": "D",
        "text": "To rotate the disk",
        "correct": false
      }
    ]
  },
  {
    "id": 64,
    "question": "A field is:",
    "choices": [
      {
        "label": "A",
        "text": "A basic data element containing a single value",
        "correct": true
      },
      {
        "label": "B",
        "text": "A collection of files",
        "correct": false
      },
      {
        "label": "C",
        "text": "A disk unit",
        "correct": false
      },
      {
        "label": "D",
        "text": "A program",
        "correct": false
      }
    ]
  },
  {
    "id": 65,
    "question": "A record is:",
    "choices": [
      {
        "label": "A",
        "text": "A collection of related fields",
        "correct": true
      },
      {
        "label": "B",
        "text": "A single bit",
        "correct": false
      },
      {
        "label": "C",
        "text": "A sector",
        "correct": false
      },
      {
        "label": "D",
        "text": "A file extension",
        "correct": false
      }
    ]
  },
  {
    "id": 66,
    "question": "A stream file sends data to the file as a:",
    "choices": [
      {
        "label": "A",
        "text": "Stream of bytes",
        "correct": true
      },
      {
        "label": "B",
        "text": "Stream of cylinders",
        "correct": false
      },
      {
        "label": "C",
        "text": "Stream of sectors only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Stream of keywords only",
        "correct": false
      }
    ]
  },
  {
    "id": 67,
    "question": "A stream file with no additional field information may make it difficult to:",
    "choices": [
      {
        "label": "A",
        "text": "Separate fields",
        "correct": true
      },
      {
        "label": "B",
        "text": "Open the file",
        "correct": false
      },
      {
        "label": "C",
        "text": "Store bytes",
        "correct": false
      },
      {
        "label": "D",
        "text": "Use a disk",
        "correct": false
      }
    ]
  },
  {
    "id": 68,
    "question": "How many main field organization methods are presented?",
    "choices": [
      {
        "label": "A",
        "text": "2",
        "correct": false
      },
      {
        "label": "B",
        "text": "3",
        "correct": false
      },
      {
        "label": "C",
        "text": "4",
        "correct": true
      },
      {
        "label": "D",
        "text": "6",
        "correct": false
      }
    ]
  },
  {
    "id": 69,
    "question": "Which method gives every field a predetermined size?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed length",
        "correct": true
      },
      {
        "label": "B",
        "text": "Length indicator",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiter",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-value",
        "correct": false
      }
    ]
  },
  {
    "id": 70,
    "question": "Padding in fixed-length fields means:",
    "choices": [
      {
        "label": "A",
        "text": "Filling unused space, commonly with spaces",
        "correct": true
      },
      {
        "label": "B",
        "text": "Deleting the field",
        "correct": false
      },
      {
        "label": "C",
        "text": "Adding an index",
        "correct": false
      },
      {
        "label": "D",
        "text": "Encrypting the field",
        "correct": false
      }
    ]
  },
  {
    "id": 71,
    "question": "The main disadvantage of fixed-length fields is:",
    "choices": [
      {
        "label": "A",
        "text": "Wasted space",
        "correct": true
      },
      {
        "label": "B",
        "text": "No readability",
        "correct": false
      },
      {
        "label": "C",
        "text": "No storage",
        "correct": false
      },
      {
        "label": "D",
        "text": "No fields",
        "correct": false
      }
    ]
  },
  {
    "id": 72,
    "question": "A major advantage of fixed-length fields is:",
    "choices": [
      {
        "label": "A",
        "text": "Simplicity and fast access",
        "correct": true
      },
      {
        "label": "B",
        "text": "Unlimited flexibility",
        "correct": false
      },
      {
        "label": "C",
        "text": "No overhead",
        "correct": false
      },
      {
        "label": "D",
        "text": "No storage allocation",
        "correct": false
      }
    ]
  },
  {
    "id": 73,
    "question": "In the length-indicator method, the length is stored:",
    "choices": [
      {
        "label": "A",
        "text": "Before the field",
        "correct": true
      },
      {
        "label": "B",
        "text": "After the entire file",
        "correct": false
      },
      {
        "label": "C",
        "text": "Only in RAM",
        "correct": false
      },
      {
        "label": "D",
        "text": "Inside the disk head",
        "correct": false
      }
    ]
  },
  {
    "id": 74,
    "question": "The length-indicator method is useful because it:",
    "choices": [
      {
        "label": "A",
        "text": "Supports variable field sizes",
        "correct": true
      },
      {
        "label": "B",
        "text": "Forces all fields to be equal",
        "correct": false
      },
      {
        "label": "C",
        "text": "Eliminates parsing",
        "correct": false
      },
      {
        "label": "D",
        "text": "Removes all storage overhead",
        "correct": false
      }
    ]
  },
  {
    "id": 75,
    "question": "A disadvantage of the length-indicator method is:",
    "choices": [
      {
        "label": "A",
        "text": "Extra space for the length information",
        "correct": true
      },
      {
        "label": "B",
        "text": "It cannot handle variable lengths",
        "correct": false
      },
      {
        "label": "C",
        "text": "It cannot be read",
        "correct": false
      },
      {
        "label": "D",
        "text": "It requires a delimiter after every character",
        "correct": false
      }
    ]
  },
  {
    "id": 76,
    "question": "A delimiter is used to:",
    "choices": [
      {
        "label": "A",
        "text": "Separate fields",
        "correct": true
      },
      {
        "label": "B",
        "text": "Calculate disk capacity",
        "correct": false
      },
      {
        "label": "C",
        "text": "Increase RAM",
        "correct": false
      },
      {
        "label": "D",
        "text": "Create cylinders",
        "correct": false
      }
    ]
  },
  {
    "id": 77,
    "question": "Which is a common use of delimiters?",
    "choices": [
      {
        "label": "A",
        "text": "CSV files",
        "correct": true
      },
      {
        "label": "B",
        "text": "CPU registers",
        "correct": false
      },
      {
        "label": "C",
        "text": "RAM chips",
        "correct": false
      },
      {
        "label": "D",
        "text": "Disk platters",
        "correct": false
      }
    ]
  },
  {
    "id": 78,
    "question": "A possible delimiter problem occurs when:",
    "choices": [
      {
        "label": "A",
        "text": "The delimiter character appears inside the data",
        "correct": true
      },
      {
        "label": "B",
        "text": "The file has a name",
        "correct": false
      },
      {
        "label": "C",
        "text": "The disk has tracks",
        "correct": false
      },
      {
        "label": "D",
        "text": "RAM is full",
        "correct": false
      }
    ]
  },
  {
    "id": 79,
    "question": "Which character is very common as a CSV delimiter?",
    "choices": [
      {
        "label": "A",
        "text": "Comma",
        "correct": true
      },
      {
        "label": "B",
        "text": "Cylinder",
        "correct": false
      },
      {
        "label": "C",
        "text": "Bit",
        "correct": false
      },
      {
        "label": "D",
        "text": "Head",
        "correct": false
      }
    ]
  },
  {
    "id": 80,
    "question": "In keyword=value organization, the keyword represents the:",
    "choices": [
      {
        "label": "A",
        "text": "Field name",
        "correct": true
      },
      {
        "label": "B",
        "text": "Field value",
        "correct": false
      },
      {
        "label": "C",
        "text": "Sector number",
        "correct": false
      },
      {
        "label": "D",
        "text": "Disk name",
        "correct": false
      }
    ]
  },
  {
    "id": 81,
    "question": "A key advantage of keyword=value organization is:",
    "choices": [
      {
        "label": "A",
        "text": "Readability and self-description",
        "correct": true
      },
      {
        "label": "B",
        "text": "Lowest storage use",
        "correct": false
      },
      {
        "label": "C",
        "text": "Highest speed",
        "correct": false
      },
      {
        "label": "D",
        "text": "No need for separators",
        "correct": false
      }
    ]
  },
  {
    "id": 82,
    "question": "A disadvantage of keyword=value organization is:",
    "choices": [
      {
        "label": "A",
        "text": "Storage overhead from field names",
        "correct": true
      },
      {
        "label": "B",
        "text": "It cannot represent empty fields",
        "correct": false
      },
      {
        "label": "C",
        "text": "It cannot store text",
        "correct": false
      },
      {
        "label": "D",
        "text": "It cannot be parsed",
        "correct": false
      }
    ]
  },
  {
    "id": 83,
    "question": "According to the lecture comparison, which field method is fastest?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed Length",
        "correct": true
      },
      {
        "label": "B",
        "text": "Length Indicator",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiters",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-Value",
        "correct": false
      }
    ]
  },
  {
    "id": 84,
    "question": "According to the lecture comparison, which field method has the highest flexibility?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed Length",
        "correct": false
      },
      {
        "label": "B",
        "text": "Length Indicator",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiters",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-Value",
        "correct": true
      }
    ]
  },
  {
    "id": 85,
    "question": "According to the lecture comparison, which method has the lowest space efficiency?",
    "choices": [
      {
        "label": "A",
        "text": "Fixed Length",
        "correct": false
      },
      {
        "label": "B",
        "text": "Length Indicator",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiters",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-Value",
        "correct": true
      }
    ]
  },
  {
    "id": 86,
    "question": "Which method can omit fields more naturally by naming only present fields?",
    "choices": [
      {
        "label": "A",
        "text": "Keyword-Value",
        "correct": true
      },
      {
        "label": "B",
        "text": "Fixed Length",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delimiter only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Track organization",
        "correct": false
      }
    ]
  },
  {
    "id": 87,
    "question": "A fixed-length record has a:",
    "choices": [
      {
        "label": "A",
        "text": "Predetermined size",
        "correct": true
      },
      {
        "label": "B",
        "text": "Random size",
        "correct": false
      },
      {
        "label": "C",
        "text": "Unknown size",
        "correct": false
      },
      {
        "label": "D",
        "text": "Size based only on its file name",
        "correct": false
      }
    ]
  },
  {
    "id": 88,
    "question": "A major advantage of fixed-length records is:",
    "choices": [
      {
        "label": "A",
        "text": "Quick direct access using simple arithmetic",
        "correct": true
      },
      {
        "label": "B",
        "text": "No need to store records",
        "correct": false
      },
      {
        "label": "C",
        "text": "No fields are required",
        "correct": false
      },
      {
        "label": "D",
        "text": "All records must be variable",
        "correct": false
      }
    ]
  },
  {
    "id": 89,
    "question": "A disadvantage of fixed-length records is:",
    "choices": [
      {
        "label": "A",
        "text": "Wasted space when fields are not fully used",
        "correct": true
      },
      {
        "label": "B",
        "text": "They cannot store uniform data",
        "correct": false
      },
      {
        "label": "C",
        "text": "They prevent fast access",
        "correct": false
      },
      {
        "label": "D",
        "text": "They cannot be implemented",
        "correct": false
      }
    ]
  },
  {
    "id": 90,
    "question": "In records with a fixed number of fields, what remains fixed?",
    "choices": [
      {
        "label": "A",
        "text": "The number of fields",
        "correct": true
      },
      {
        "label": "B",
        "text": "The exact size of every field",
        "correct": false
      },
      {
        "label": "C",
        "text": "The number of bytes in every field",
        "correct": false
      },
      {
        "label": "D",
        "text": "The number of cylinders",
        "correct": false
      }
    ]
  },
  {
    "id": 91,
    "question": "A benefit of a fixed number of fields is:",
    "choices": [
      {
        "label": "A",
        "text": "Field sizes can vary",
        "correct": true
      },
      {
        "label": "B",
        "text": "No processing is needed",
        "correct": false
      },
      {
        "label": "C",
        "text": "There are no fields",
        "correct": false
      },
      {
        "label": "D",
        "text": "Variable data is impossible",
        "correct": false
      }
    ]
  },
  {
    "id": 92,
    "question": "Delimiter-separated records use:",
    "choices": [
      {
        "label": "A",
        "text": "Special characters to separate records or fields",
        "correct": true
      },
      {
        "label": "B",
        "text": "RAM addresses",
        "correct": false
      },
      {
        "label": "C",
        "text": "Disk cylinders",
        "correct": false
      },
      {
        "label": "D",
        "text": "CPU instructions",
        "correct": false
      }
    ]
  },
  {
    "id": 93,
    "question": "A challenge with delimiter-separated records is:",
    "choices": [
      {
        "label": "A",
        "text": "Delimiter conflicts with data may require escaping",
        "correct": true
      },
      {
        "label": "B",
        "text": "They cannot be implemented",
        "correct": false
      },
      {
        "label": "C",
        "text": "They require a special CPU",
        "correct": false
      },
      {
        "label": "D",
        "text": "They cannot transfer data",
        "correct": false
      }
    ]
  },
  {
    "id": 94,
    "question": "The main purpose of indexing is to:",
    "choices": [
      {
        "label": "A",
        "text": "Speed up record lookup",
        "correct": true
      },
      {
        "label": "B",
        "text": "Increase padding",
        "correct": false
      },
      {
        "label": "C",
        "text": "Delete records",
        "correct": false
      },
      {
        "label": "D",
        "text": "Convert text to binary",
        "correct": false
      }
    ]
  },
  {
    "id": 95,
    "question": "An index requires:",
    "choices": [
      {
        "label": "A",
        "text": "Additional storage and maintenance",
        "correct": true
      },
      {
        "label": "B",
        "text": "No extra resources",
        "correct": false
      },
      {
        "label": "C",
        "text": "Less data storage in every case",
        "correct": false
      },
      {
        "label": "D",
        "text": "No maintenance",
        "correct": false
      }
    ]
  },
  {
    "id": 96,
    "question": "In indexed organization, keys are commonly:",
    "choices": [
      {
        "label": "A",
        "text": "Sorted",
        "correct": true
      },
      {
        "label": "B",
        "text": "Deleted",
        "correct": false
      },
      {
        "label": "C",
        "text": "Encrypted only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Converted to bytes",
        "correct": false
      }
    ]
  },
  {
    "id": 97,
    "question": "Which organization best fits an application needing fast lookup of specific records?",
    "choices": [
      {
        "label": "A",
        "text": "Indexed",
        "correct": true
      },
      {
        "label": "B",
        "text": "Sequential only",
        "correct": false
      },
      {
        "label": "C",
        "text": "Stream without an index",
        "correct": false
      },
      {
        "label": "D",
        "text": "Fixed padding only",
        "correct": false
      }
    ]
  },
  {
    "id": 98,
    "question": "What is the best general rule for choosing a file organization method?",
    "choices": [
      {
        "label": "A",
        "text": "Match it to access patterns, performance, and storage requirements",
        "correct": true
      },
      {
        "label": "B",
        "text": "Always choose the fastest method",
        "correct": false
      },
      {
        "label": "C",
        "text": "Always choose the largest method",
        "correct": false
      },
      {
        "label": "D",
        "text": "Always choose the method using the most RAM",
        "correct": false
      }
    ]
  },
  {
    "id": 99,
    "question": "Which file organization is specifically described as suitable for log files and backup archives?",
    "choices": [
      {
        "label": "A",
        "text": "Sequential",
        "correct": true
      },
      {
        "label": "B",
        "text": "Indexed",
        "correct": false
      },
      {
        "label": "C",
        "text": "Direct Access only",
        "correct": false
      },
      {
        "label": "D",
        "text": "Keyword-Value",
        "correct": false
      }
    ]
  },
  {
    "id": 100,
    "question": "Which C++ file stream is suitable when a program needs both reading and writing?",
    "choices": [
      {
        "label": "A",
        "text": "ifstream",
        "correct": false
      },
      {
        "label": "B",
        "text": "ofstream",
        "correct": false
      },
      {
        "label": "C",
        "text": "fstream",
        "correct": true
      },
      {
        "label": "D",
        "text": "iostream only",
        "correct": false
      }
    ]
  }
];
