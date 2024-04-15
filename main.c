#include <stdio.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <time.h>  // Added for ctime()
#include <string.h>
#include <unistd.h>
int main() {
  struct stat attr;

  while (1) {
    if (stat("content.md", &attr) == -1) {
      perror("Error in stat");
      return 1;
  }
  char *ctime_str = ctime(&attr.st_mtime);
    char str[100];

  if (strcmp(ctime_str, str) != 0) {
    system("npm start");
    strcpy(str, ctime_str);
  }
  sleep(5);
  }
  return 0;
}
