function dir(x, y) {
  if (x == 0 && y == -1) {
    return "SOUTH";
  } else if (x == 1 && y == 0) {
    return "EAST";
  } else if (x == 1) {

  }
}

function diRec(arr) {
  map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]
  i = 2, j = 2;
  ci = 2, cj = 2;
  x = 0, y = 0
  for (dir of arr) {
    switch (dir) {
      case "SOUTH":
        x = 0, y = -1;
        break;
      case "EAST":
        x = +1, y = 0;
        break;
      case "WEST":
        x = -1, y = 0;
        break;
      case "NORTH":
        x = 0, y = +1;
        break;
      default:
        break;
    }

    i += y;
    j += x;
    map[i][j] += 1;
  }

  console.log(map);
  k = 0, z = 0;
  if (2 <= i) {
    for (e = 2; e <= i; e++) {
      k = e
    }
  } else {
    for (e = 2; e >= i; e--) {
      k = e
    }
  }
  if (2 <= j) {
    for (e = 2; e <= j; e++) {
      z = e
    }
  } else {
    for (e = 2; e >= j; e--) {
      z = e
    }
  }
  console.log("i : ", i)
  console.log("j : ", j)
  console.log("k : ", k)
  console.log("z : ", z)
  map[k][z] = 9;
  console.log(map)
}

arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

diRec(arr);
