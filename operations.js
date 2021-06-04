export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function divide(x, y) {
    return x / y;
}

export function mod(x, y) {
    return x % y;
}

export function intdiv(x, y) {
    return Math.floor(x / y);
}

export function pythag(a, b) {
    return (a**2 + b**2)**(1/2);
}

export function hail(start) {

    let current = BigInt(start);
    let count = 0;
  
    while ( current !== BigInt(1) ) {
      count += 1;
      if ( current % BigInt(2) === BigInt(0) ) {
        current = current / BigInt(2)
      } else {
        current = current * BigInt(3) + BigInt(1);
      }
    }
    return(count);
  }