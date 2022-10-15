//% blockNamespace=Packing 



class Heap {
    data: any
    checksum: Checksum
    constructor() {
        this.data = {}
    }

    add(name: string, data: any) {
        if (!name) {return}
        this.data[name] = data
    }

    remove(name: string) {
        if (!this.data[name]) {return}
        delete this.data[name]
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

    //% blockId=packing_remove_item
    //% block="remove property $name from $heap=variables_get(data)"
    //% name.defl="name"
    //% group="Modification"
    export function remove_item(heap: Heap, name: string) {
        if (!name) {return}
        heap.remove(name)
    }
}