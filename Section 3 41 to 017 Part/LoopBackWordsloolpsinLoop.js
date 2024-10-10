//Reverse looping

for (let counter = 5; counter > 0; counter--) {
    console.log(counter);

  }

  //loop inside the loop neeested loops

  for (let i = 0; i < 3; i++) {
    console.log(`Outer loop: ${i}`);
  
    for (let j = 0; j < 2; j++) {
      console.log(`  Inner loop: ${j}`);
    }
  }
  