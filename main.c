#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <time.h>  // Added for ctime()
#include <string.h>
#include <unistd.h>
int main() {
  struct stat attr;

  // Get the file attributes and check for errors
 
  while (1)
  {
     if (stat("content.md", &attr) == -1) {
    perror("Error in stat");
    return 1;
  }

  // Convert the time of the last modification to the contents of the file to a character string.
  char *ctime_str = ctime(&attr.st_mtime);
    char str[100];
  // Print the character string.
//   printf("The file was last modified on %s\n", ctime_str);
    
  if (strcmp(ctime_str, str) != 0)
  {
    system("npm start");
    strcpy(str, ctime_str);
  }
  sleep(5);
  }
  
  
  return 0;
}
