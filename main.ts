//% blockNamespace=Packing 
//% icon="\uf466"

class Heap {
    data: object
    constructor() {
        this.data = {}
    }
}

//% color="#A37C4B"
namespace Packing {
    //% blockId=packing_create
    //% color="#A37C4B"
    //% block="create new heap"
    //% blockSetVariable=data
    export function create_heap(): Heap {
        return new Heap()
    }
}