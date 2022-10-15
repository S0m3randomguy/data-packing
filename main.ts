//% blockNamespace=Packing 

class Heap {
    data: any
    constructor() {
        this.data = {}
    }

    add(name: string, data: any) {
        if (!name) {return}
        this.data[name] = data
    }
}

//% color="#A37C4B"
//% icon="\uf187"
//% groups="['Creation', 'Modification', 'Encryption', 'Compile']"
namespace Packing {
    //% blockId=packing_create
    //% block="create new heap"
    //% blockSetVariable=data
    //% group="Creation"
    export function create_heap(): Heap {
        return new Heap()
    }

    //% blockId=packing_add_item
    //% block="add property $name = $item to $heap=variables_get(data)"
    //% name.defl="name"
    //% group="Modification"
    export function add_item(heap: Heap, name: string, item: any) {
        if (!name || !item) {return} 
        heap.add(name, item)
    }
}