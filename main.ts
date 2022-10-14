//% blockNamespace=Packing 

class Heap {
    data: object
    constructor() {
        this.data = {}
    }
}

//% color="#A37C4B"
//% icon="\uf466"
namespace Packing {
    //% blockId=packing_create
    //% color="#A37C4B"
    //% block="create new heap"
    //% blockSetVariable=data
    export function create_heap(): Heap {
        return new Heap()
    }
}