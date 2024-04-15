#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <time.h>
#include <string.h>


int main() {
    char str[50];
    char path[] = "content.md";
    struct stat attr;
    stat(path, &attr);
    char *tm[50] = ctime(&attr.st_mtime);
    while(1){
        if (str != tm)
        {
            system("npm start");
            printf("Hello World \n");
            strcpy(str, tm);
        }
        
        sleep(5);
}

    return 0;
}