let a=b=c=1;

// no ASI here:
a=b
+c
console.log(`a: ${a}`);

// set ; manually:
a=b;
+c
console.log(`a: ${a}`);