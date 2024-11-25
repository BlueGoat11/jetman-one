// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "dungeon":
            case "level2":return tiles.createTilemap(hex`4000100002020202020202020202020203030202020202020202020203030202020c0c0c0c020202020202020202030302020202020202020202020202020202020202020000000000000000000000000407000000000000000000000407000000000000000000000000000000000407000000000000000000000000000000000000000a0000000000000000000000000407000000000000000000000407000000000000000000000000000000000407000000000000000000000000000000000000000a0000000000000000000000000407000000000000000000000407000000000000000000000000000000000407000000000000000000000000000000000000000a0000000000000000000000000407000000000000000000000407000000000000000000000000000000000407000000000000000000000000000000000000000a0000000000000000000000000809000000000000000000000407000000000000000000000000000000000407000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000809000000000000000000000000000000000407000000000000000d00000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000407000000000000050101010101060000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000809000000000000040303030303070000000000000a0000000000000000000000000000000000000000000000000000000000000000000000050600000000000000000000000000040303030303070000000000000a0000000000000000000000000000000000000000000000000000000000000000000000040700000000000000000000000000080202020202090000000000000a0000000005060000000000000000000000000000000000000000000000000000000000040700000000000000000000000000000000000000000000000000000a0000000004070000000000000000000000000000000000000506000000000000000000040700000000000000000000000000000000000000000000000000000a0000000004070000000000000000000000000000000000000407000000000000000000040700000000000000000000000000000000000000000000000000000a0000000d0407000000000000000000000000000000000000040700000d0000000000000407000000000000000000000d0000000000000000000000000000000a010101010303010101010b0b0b0b0101010101010101010103030101010101010101010303010101010c0c0c0c01010101010101010101010101010101010101`, img`
2222222222222222222222222222222222222222222222222222222222222222
............22..........22................22....................
............22..........22................22....................
............22..........22................22....................
............22..........22................22....................
............22..........22................22....................
........................22................22.......2............
..........................................22......2222222.......
..........................................22......2222222.......
...................................22.............2222222.......
...................................22.............2222222.......
....22.............................22...........................
....22..................22.........22...........................
....22..................22.........22...........................
...222..................22..2......22..........2................
2222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.castle.rock1], TileScale.Sixteen);
            case "trees":
            case "level3":return tiles.createTilemap(hex`4000100002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202000000000000000000000000000000000000000003000000000000000000000000000000000000000000000300000000000000000000000000000000000000080000000000000000000000000000000000000000030000000000000000000000000000000000000000000003000000000000000000000000000000000000000800000000000000000000000000000000000000030300000000000000000000000000000000000000000000030000000000000000000000000000000000000008000000000000000000000000000000000000070703070000000000000000000000000000000000000000000300000000000000000000000000000000000000080000000000000000000000000000000000000007070307070000000000000000000000000000000000060603030600000000000000000000000000000000000800000000000000000000000000000000000000000707070000000000000000000000000000000000000606060306060000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000060306060600000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060000000000000000000606060600000000000800000000000000000000060606000000000000000000000000000000000007070707000000000000000000000000000000000000000606030606000000000008000000000000000000060606060000000000000000000000000000000707070703070000000000000000000000000000000000000606060306060000000000080000000000000000000606030606000000000000000000000000000000000703030707000000000000000000000000000000000006060603060000000000000800000000000000000000000300000000000000000000000000000000000007030707070000000000000000000000000000000000000003030000000000000008000000000000000000000003000000000000000000000000000000000000000300000000000000000000000000000000000000000000030000000000000000080000000000000000000004030500000000000000000000000000000000000003000000000000000000000000000000000000000000000300000000000000000801010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
2222222222222222222222222222222222222222222222222222222222222222
....................2......................2....................
....................2......................2....................
...................22......................2....................
..................2222.....................2....................
...................22222.................22222..................
....................222..................222222.................
..........................................22222.................
..........................................222.........2222......
..........222.................2222...................22222......
.........2222...............222222..................222222......
.........22222................22222.................22222.......
...........2..................22222...................22........
...........2...................2......................2.........
..........222..................2......................2.........
2222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath8,myTiles.tile1,sprites.swamp.swampTile0,sprites.swamp.swampTile2,myTiles.tile2,myTiles.tile3,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "city":
            case "level8":return tiles.createTilemap(hex`4000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101000000000000000000000000000000000000000002030200000000000000000000000000000000000000020302000000000000000000000000000000000000050000000000000000000000000000000000000000020202000000000000000000000000000000000000000202020000000000000000000000000000000000000500000000000000000000000000000000000000000204020000000000000000000000000000000000000002040200000000000000000000000000000000000005000000000000000000000000000000000000000002040200000000000000000000000000000000000000020402000000000000000000000000000000000000050000000000000000000000000000000000000000020202000000000000000000000000000000000000000204020000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000002020200000000000000000002040200000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000020402000000000000000000020202000000000000000000020202000000000000050000000000000202020000000000000000000000000000000000000000000204020000000000000000000000000000000000000000000200020000000000000500000000000002040200000000000000000000000000000000000000000002020200000000000000000000000000000000000000000002040200000000000005000000000000020402000000000000000000000000000000000000000000020402000000000000000000000000000000000000000000020402000000000000050000000000000204020000000000000000000000000000000000000000000204020000000000000000000000000000000000000000000204020000000000000500000000000002040200000000000000000000000000000000000000000002040200000000000000000000000000000000000000000002040200000000000005000000000000020202000000000000000000000000000000000000000000020202000000000000000000000000000000000000000000020202000000000000050000000000000203020000000000000000000000000000000000000000000203020000000000000000000000000000000000000000000203020000000000000501010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
2222222222222222222222222222222222222222222222222222222222222222
....................222...................222...................
....................222...................222...................
....................222...................222...................
....................222...................222...................
....................222...................222...................
..............................222.........222...................
..............................222.........222.........222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
......222.....................222.....................222.......
2222222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.builtin.brick,myTiles.tile9,myTiles.tile10,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
            case "gameOver":
            case "level33":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "treeTrunk":
            case "tile1":return tile1;
            case "treeLeaves 1":
            case "tile2":return tile2;
            case "treeLeaves 2":
            case "tile3":return tile3;
            case "door":
            case "tile9":return tile9;
            case "window":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.