var arr = [ 
        { id: '1', '': '' },
        { id: '2', '': '' },
        { id: '3', '': '' },
        { id: '4', '': '' },
        { id: '', '': '' },
        { id: '', '': '' },
        { id: '', '': '' },
        { id: '', '': '' },
        { id: '', '': '' }
    ]

var res = arr.filter(val => {
    return val.id
})


console.log(res.length) // ==> 4