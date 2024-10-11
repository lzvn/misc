# makefile 3, now with variables and separate folders for better organization

# project of name
EXEC_NAME=hello

# .c files
C_SRC=${wildcard ./src/*.cpp}

# .h files
H_SRC=${wildcard ./src/*.h}

# .o files
OBJ=${subst .cpp,.o,${subst src,obj,${C_SRC}}}

# compiler and linker
CC=gcc

#flags
CC_FLAGS=-c \
	 -W \
	 -Wall \
	 -ansi \
	 -pedantic

#command to clean target
RM = rm -rf


#compilation and linking
all: objFolder ${EXEC_NAME}

${EXEC_NAME}: ${OBJ}
	${CC} $^ -o $@

./obj/%.o: ./src/%.cpp ./src/%.h
	${CC} $< ${CC_FLAGS} -o $@

./obj/main.o: ./src/main.cpp ${H_SRC}
	${CC} $< ${CC_FLAGS} -o $@

objFolder: 
	@ mkdir -p obj

clean:
	@ ${RM} ./obj/*.o ${EXEC_NAME} *~
	@ rmdir obj

.PHONY: all clean
