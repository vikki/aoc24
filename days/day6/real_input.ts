import { countInBoundMovements } from ".";

const input = 
`..#.....##......#............#..................................#.....#..............#................#.........................#.
..........................................................................................................#..........#...#.......#
..................#....................#.......................................#.....#....#............#.......#..................
......#...#..##....................................................................#...#.......#..........#..#.....#..............
..#..#.#.............#.#.........#.........##..................#..............#..........................#........................
#..........#.................#..........#...............................#..#.................#.......##..##..#.#..................
......................#......................................................#........................#......................#....
........................#.#.....................................#..............................#.......#.............#.....#......
#.................#...#......#..........#.......#.....#............................................#...........##.........#.....#.
...........................................#.....#............##...............#..............................#...................
.....#..............#......................................#..........#............#..................##...............#......###.
..............#..#.....................................##................#............................#............#......#.......
#........#...................................................#..........................................#.........................
.................................................................................#................................#....#..#..#....
.............................#.###.........#.#...............#..........................................##........................
......................................................................................................................#.........#.
...............#............#............#...#.........#............#.............................#.#........................#....
........................#...............#...............#........#.........#................#....#.#....................#.........
........#...............#...........................................................................................#.............
.................#..........................................................#.....................................................
........#.#.#...................#..#.......#...........#..#............#......#.....................#.....#.........#..#..........
..#.......#..................................................................................................#......#.............
................##...##......................#....................................................#..............................#
............#......................................#...........................#.#...#...............#.....................##.....
..........#...................#.....................#...........................................##................................
.#.......................#...............................................................#........................................
...................................................................#..#................#.....#....................#...............
...........#...........................................................#..........................................................
.....#....#..#..........................................................#..................#.....................##...............
...#................................#.....#...................#...............##...........#..............#.......................
.......##.....#.............#..#.......................................................................#......................#...
......................................#....#.............................................#...#....................#...............
.......#.......#...............#..#.....#..............................#.#......#...............#.................................
......................#.......#.......#..........................................................#................#...........#...
..............................#........................#.......#..#...............................#...............................
...........................#..........#..##.......................#................#..............................................
..............#............#...##........#.................................#................#....#........................#..#....
..............#.........#............................................#.............#......#......#.#....#.........................
.......................#.................................#..#..#..#..............................................#................
........................###..#...............................................................#.........#................#......#..
#........................................................................................#........................................
........................................#..............................##.....#.........................#...........#.............
.............#.........#...#................#..#..........#.....#...........................................................#.....
.......................................#......#.............................#.........#................#..........................
..........................................................#......................#...........#...#.......#........................
#.....................................#.#...#.............................................................#...........#........#..
............................#..................................................................................#............#.....
#.................#.................................................................#..............#...................#..........
........#...................................................................#...............................................#.....
.................#...#..................#.............................................................#.......#...................
...#.....#.................................................................................................#..........#...........
..........#...................................#....#................#......#........................................#.......#.....
.....................................#...............#................................................................#...........
.#............#................................................................#.............................................#....
...........#.........#.....................#...........#^.......................#.....................#..........#................
.....#........#.................................................................................................#.......#.........
..........#..........................#.......#......................#..............................#....#......................#..
...#.........................#.................#....#........#....................................................................
...............#...#........................................#................................#....#........................#.#....
...........#.......................................#......#....#.......................................................#.......#..
#.........#...............#..#..#..........#..............#...........................#...........#.....................#.........
...................#.......................................................#......................................................
.............#..............................................#.......................................#.........#...........#......#
....#......#...#.................................#.....#......#.................................#.................................
...............#...............#......................................................................#...........................
.......................#.........................................................................................................#
.............................#............................................................................#.......................
...................#..#.........#...........................#......#...............#......#.......................................
...#....................................#...................#..#...........................#............#...............#........#
...................#................................................................#............##...............................
........................#.#...................#.....................................................................#...#.........
...................#......#.......#.#......................................................#...............#......................
....#...........................#................#.............................#..#....................#........##.....#..........
.........................#......................................................#.#......................................#........
.........#.............#.................#........................................................................................
.#.#.......#..#....#.......#...#..#......................................................................#.#......................
..#.................#............................................................................#................................
.#................................#...............................................................................................
..........#............#..............................................#...#...............##...............#..................#...
................................#.........................#.......................................................................
........................................................##.......#........................#.....................#.................
......#......................................................#......#.........#........................................#.......#..
...........................................................#............#....#......#.............................................
..................................#...................................................#.................................#...#.....
.......#...#..........#............#.......#........................................#..#.................#........................
....................#........................................#........#...........................................................
.................................##..#............#.................................#.............#..................#....#.......
.#.................#..........#.....#...........#.......................................................#...................#.....
........................#.........................................................................................................
...#..........................................#...........................#.................................#.....................
............#......................................................#.................................#.........#..............#...
.............#........##.........#..................#...#.............#......#....##................#................#............
..................#...........................................................................................#.................#.
.....................#..#..#....................#........................#.........#................................#.............
..............................................#...................#............................#..............................#...
.......................#.#...................................#.............................#...................................#..
................................#...........#.............................#.............#.........#..............................#
...........................#................................#...................................................#.....#...........
..........#..........#.....#..........#..#............#..........#.................#.......#.......#........................#....#
...#.......#...#..............................................................................................#......#......#.....
...........#......................#..#.................#......#.........#.....#.............#............##................#....#.
.......#...........................................#..................#...............#.............................#.............
....#.......#.................................#..................................................................#................
..#..................................#...#............................#.........#....#..........#............................#....
....................................................#.................#...........................................#...............
............#......................................#.........#..................#.....#.#.#.#..#..................................
#..............#.......#...#.#..............#.....#.#.............................................................................
...........#.#.................................#...#........................................#................#.........#....#.....
......#.........................................#.........................#...........................................#...........
...#......#.................................#......#............................................................................#.
...#.................#....##................#...........................................#.........#....#..........................
...........#...#...#..................#...................................#......................................#......#.....#.#.
...................................#....................#................#..................................................#.....
................#.....................................#...........#......#........................................................
..............................#......#..#..............................................##........#......#......................#.#
#...........................#....#....##.....#...........................##..#...................#.....#........#.................
..........#....#.#..................#..........#..#................#.................#..................................##.......#
...................#.....................#......#...........................................................#..........#..........
........#.....#.............................#..............................................#......................................
......#............#.#.................................................................................................#..#.......
.#.........#..................................................................................#....#...........#.................#
........#.....#.......................#.........................................#...........................................#.....
...................#.......#..#......#.................##......................................#...................#..............
.............................#.................................#........#.......#..................................#.........#....
....#....#..........#....###..#...................................................#...#................................#.......#..
...................#...................................................#.......#....#........................#....................
...#................#...........#.......................#.....................................#...#......#......#.................
.......#........................#.........#.............................................................#...#...#.................
....................#.........#..............................#..........................#....................#..#.................
..#..........................#.#...................................#..................#..........#................#...............`;

console.log(countInBoundMovements(input));