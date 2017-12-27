/**
 * Author: shaack
 * Date: 16.12.2017
 */

import {Test} from "../node_modules/svjs-test/src/svjs/Test.js"
import {Chessboard, MARKER_TYPE} from "../src/cm-chessboard/Chessboard.js";

export class TestMarkers extends Test {
    testSetMarker() {
        const chessboard = new Chessboard(document.getElementById("TestMarkers"), {
            sprite: {url: "../assets/images/chessboard-sprite.svg"},
            position: "empty"
        }, () => {
            chessboard.addMarker("e5");
            chessboard.addMarker("b6");
            chessboard.addMarker("h6", MARKER_TYPE.lastMove);
            Test.assertEquals(3, chessboard.getMarkers().length);
            Test.assertEquals(1, chessboard.getMarkers("e5").length);
            Test.assertEquals("e5", chessboard.getMarkers("e5")[0].square);
            Test.assertEquals("marker2", chessboard.getMarkers("e5")[0].type.slice);
            Test.assertEquals(2, chessboard.getMarkers(null, MARKER_TYPE.emphasize).length);
            Test.assertEquals(1, chessboard.getMarkers("e5", MARKER_TYPE.emphasize).length);
            Test.assertEquals(0, chessboard.getMarkers("a4").length);
            Test.assertEquals(1, chessboard.getMarkers(null, MARKER_TYPE.lastMove).length);
            Test.assertEquals(0, chessboard.getMarkers("b6", MARKER_TYPE.newMove).length);
            chessboard.destroy();
        });
    }
}