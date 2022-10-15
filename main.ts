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

    get_item(name: string) {
        let item = this.data[name]
        if (item) {return item}
        throw `Heap does not contain item '${name}'`
    }

    compile() {
        let keys = Object.keys(this.data)
        for (let i = 0; i < keys.length; i++) {

        }
    }

    wipe() {
        this.data = {}
    }
}

//% color="#A37C4B"
//% icon="\uf187"
//% groups="['Create', 'Modify', 'Encrypt', 'Compile']"
namespace Packing {
    //% blockId=packing_create
    //% block="create new heap"
    //% blockSetVariable=data
    //% group="Create"
    export function create_heap(): Heap {
        return new Heap()
    }

    //% blockId=packing_add_item
    //% block="add property $name = $item to $heap=variables_get(data)"
    //% name.defl="name"
    //% group="Modify"
    export function add_item(heap: Heap, name: string, item: any) {
        if (!name || !item) {return} 
        heap.add(name, item)
    }

    //% blockId=packing_remove_item
    //% block="remove property $name from $heap=variables_get(data)"
    //% name.defl="name"
    //% group="Modify"
    export function remove_item(heap: Heap, name: string) {
        if (!name) {return}
        heap.remove(name)
    }

    //% blockId=packing_get_item
    //% block="get property from $heap=variables_get(data)"
    //% name.defl="name"
    //% group="Modify"
    export function get_item(heap: Heap, name: string): any {
        return heap.get_item(name)
    }

    //% blockId=packing_wipe
    //% block="wipe all data from $heap=variables_get(data)"
    //% group="Modify"
    export function wipe(heap: Heap) {
        heap.wipe()
    }

    //% blockId=packing_compile
    //% block="compile $heap=variables_get(data) to device storage"
    //% group="Compile"
    export function compile(heap: Heap) {
        
    }
}