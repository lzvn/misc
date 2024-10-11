#include <sys/ioctl.h>
#include <stdio.h>

#define CHAR_HEIGHT 18;
#define CHAR_WIDTH 8;

void calcPixelSizes(struct winsize *w);

int main(void) {
        struct winsize ws;
        ioctl(0, TIOCGWINSZ, &ws);
        printf("rows: %d\n", ws.ws_row);
        printf("cols: %d\n", ws.ws_col);
        calcPixelSizes(&ws);
        printf("pixels: %d, %d\n", ws.ws_xpixel, ws.ws_ypixel);
        return 0;
}

void calcPixelSizes(struct winsize *w) {
        w->ws_xpixel = w->ws_col*CHAR_WIDTH;
        w->ws_ypixel = w->ws_row*CHAR_HEIGHT;
}
