// @ts-nocheck
if(typeof Number.prototype.internationalize !== "function"){
    Number.prototype.internationalize = function(){
        if(!this || typeof this !== "number") return new Error("Calling property internationalize of undefined")

        return Intl.NumberFormat().format(this)
    }
}

