//% blockNamespace=Packing

enum Target {
    //% block="Device storage"
    DeviceStorage,
    Console
}

const MAIN_SEPARATOR  = "&"
const ARRAY_SEPARATOR = "$"

function get_type(item: any, name: string) {
    let item_type = typeof (item)
    if (item_type != "object") {
        return typeof(item)
    }
    if (Array.isArray(item)) {
        return "array"
    }
    throw `Cannot compile object '${name}' of type ${item_type}`
}

function to_string(item: any, _type: string) {
    if (_type == "string") {
        return item
    } else if (_type == "number") {
        return item.toString()
    } else if (_type == "boolean") {
        return item ? "true" : "false"
    }
    let array_string = ""
    for (let i = 0; i < item.length; i++) {
        array_string += item[i]
        if (i < item.length - 1) {array_string += ARRAY_SEPARATOR}
    }
    return array_string
}

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

    compile(target: Target, name: string) {
        let keys = Object.keys(this.data)
        let compilation = ""
        let _type
        let item
        for (let i = 0; i < keys.length; i++) {
            item = this.data[keys[i]]
            _type = get_type(item, keys[i])
            compilation += to_string(item, _type)
            if (i < keys.length - 1) {compilation += MAIN_SEPARATOR}
        }
        if (target == Target.DeviceStorage) {
            blockSettings.writeString(name, compilation)
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
    //% block="get property $name from $heap=variables_get(data)"
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
    //% block="compile $heap=variables_get(data) to $target as $name"
    //% name.defl="name"
    //% group="Compile"
    //% inlineInputMode=inline
    export function compile(heap: Heap, target: Target, name: string) {
        heap.compile(target, name)
    }
}