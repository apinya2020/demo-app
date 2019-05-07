function print() {
    const name = 'Nuttavut Thongjor'
    
    // return function ออกไปเมื่อเรียกฟังก์ชัน print
    return function() {
      console.log(name)
    }
  }
  
  const printName = print()
  printName() // Nuttavut Thongjor