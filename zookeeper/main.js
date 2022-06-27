const prompt = require('prompt-sync')({ sigint: true });

console.log('I love animals!');
console.log("Let's check on the animals...");
console.log('The deer looks fine.');
console.log('The bat looks happy.');
console.log('The lion looks healthy.');

const camel = `
Switching on the camera in the camel habitat...
 ___.-''''-.
/___  @    |
',,,,.     |         _.'''''''._
     '     |        /           \\
     |     \\    _.-'             \\
     |      '.-'                  '-.
     |                               ',
     |                                '',
      ',,-,                           ':;
           ',,| ;,,                 ,' ;;
              ! ; !'',,,',',,,,'!  ;   ;:
             : ;  ! !       ! ! ;  ;   :;
             ; ;   ! !      ! !  ; ;   ;,
            ; ;    ! !     ! !   ; ;     
            ; ;    ! !    ! !     ; ;
           ;,,      !,!   !,!     ;,;
           /_I      L_I   L_I     /_I
Look at that! Our little camel is sunbathing!`;

const lion = `
Switching on the camera in the lion habitat...
                                               ,w.
                                             ,YWMMw  ,M  ,
                        _.---.._   __..---._.'MMMMMw,wMWmW,
                   _.-""        '''           YP"WMMMMMMMMMb,
                .-' __.'                   .'     MMMMW^WMMMM;
    _,        .'.-'"; \`,       /\`     .--""      :MMM[==MWMW^;
 ,mM^"     ,-'.'   /   ;      ;      /   ,       MMMMb_wMW"  @\\
,MM:.    .'.-'   .'     ;     \`\\    ;     \`,     MMMMMMMW \`"=./\`-,
WMMm__,-'.'     /      _.\\      F'''-+,,   ;_,_.dMMMMMMMM[,_ / \`=_}
"^MP__.-'    ,-' _.--""   \`-,   ;       \\  ; ;MMMMMMMMMMW^\`\`; __|
           /   .'            ; ;         )  )\`{  \\ \`"^W^\`,   \\  :
          /  .'             /  (       .'  /     Ww._     \`.  \`"
         /  Y,              \`,  \`-,=,_{   ;      MMMP\`""-,  \`-._.-,
        (--, )                \`,_ / \`) \\/"")      ^"      \`-, -;"\\:
The lion is roaring!`;

const deer = `
Switching on the camera in the deer habitat...
   /|       |\\
\`__\\\\       //__'
   ||      ||
 \\__\`\\     |'__/
   \`_\\\\   //_'
   _.,:---;,._
   \\_:     :_/
     |@. .@|
     |     |
     ,\\.-./ \\
     ;;\`-'   \`---__________-----.-.
     ;;;                         \\_\\
     ';;;                         |
      ;    |                      ;
       \\   \\     \\        |      /
        \\_, \\    /        \\     |\\
          |';|  |,,,,,,,,/ \\    \\ \\_
          |  |  |           \\   /   |
          \\  \\  |           |  / \\  |
           | || |           | |   | |
           | || |           | |   | |
           | || |           | |   | |
           |_||_|           |_|   |_|
          /_//_/           /_/   /_/
Our 'Bambi' looks hungry. Let's go to feed it!`;

const goose = `
Switching on the camera in the goose habitat...

                                    _
                                ,-"" "".
                              ,'  ____  \`.
                            ,'  ,'    \`.  \`._
   (\`.         _..--.._   ,'  ,'        \\    \\
  (\`-.\\    .-""        ""'   /          (  d _b
 (\`._  \`-"" ,._             (            \`-(   \\
 <_  \`     (  <\`<            \\              \`-._\\
  <\`-       (__< <           :
   (__        (_<_<          ;
    \`------------------------------------------
The goose is staring intently at you... Maybe it's time to change the channel?`;

const bat = `
Switching on the camera in the bat habitat...
_________________               _________________
 ~-.              \\  |\\___/|  /              .-~
     ~-.           \\ / o o \\ /           .-~
        >           \\\\  W  //           <
       /             /~---~\\             \\
      /_            |       |            _\\
         ~-.        |       |        .-~
            ;        \\     /        i
           /___      /\\   /\\      ___\\
                ~-. /  \\_/  \\ .-~
                   V         V
This bat looks like it’s doing fine.`;

const rabbit = `
Switching on the camera in the rabbit habitat...
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \\
\\//\\/      .- \\
 Y        /    Y
 l       I     !
 ]\\      _\\    /"\\
(" ~----( ~   Y.  )
It looks like we will soon have more rabbits!`;

const animals = [camel, lion, deer, goose, bat, rabbit];

console.log('1. Camel, 2. Lion, 3. Deer, 4. Goose, 5. Bat, 6. Rabbit\nType exit to close the program.');
let answer = prompt('Which habitat number do you need? > ');

while (answer !== 'exit') {
  if (answer > 0 && answer < 7) {
    console.log(animals[answer - 1]);
    answer = prompt('Which habitat number do you need? > ');
  } else {
    console.log('There is no habitat with that number. Please, try again.');
    answer = prompt('Which habitat number do you need? > ');
  }
}
console.log('See you later!');
