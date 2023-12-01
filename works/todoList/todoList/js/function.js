class TodoList {
    constructor() {
        this.DOM = {};
        this.DOM.incomplete = document.querySelector('.item-area-incomplate ul');
        this.DOM.complete = document.querySelector('.item-area-complete ul');
        this.DOM.delete = document.querySelector('.item-area-delete');
    }

    //TODOリストに追加
    _createItem(text) {
        const liEl = document.createElement('li');
        const pEl = document.createElement('p');
        const boxEl = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const completeBtn = document.createElement('button');

        completeBtn.innerText = '完了';
        deleteBtn.innerText = '削除';
        pEl.innerText = text;

        //完了クリック
        completeBtn.addEventListener('click', e => {
            this.deleteItem(e.target.parentNode.parentNode, this.DOM.incomplete);
            this.addCompleteItem(text);
        });

        //削除クリック
        deleteBtn.addEventListener('click', e => {
            this.deleteItem(e.target.parentNode.parentNode,this.DOM.incomplete);
            this.addDeleteItem(text);
        });

        //要素の生成
        liEl.appendChild(pEl);
        pEl.after(boxEl);
        boxEl.appendChild(completeBtn);
        boxEl.appendChild(deleteBtn);

        return liEl;
    }

    //完了リストに移動 
    _completeItem(text) {
        const liEl = document.createElement('li');
        const pEl = document.createElement('p');
        const backBtn = document.createElement('button'); 

        backBtn.classList.add('complete-btn');
        backBtn.innerText = '戻る';
        pEl.innerText = text;

        //戻るクリック
        backBtn.addEventListener('click',e =>{
            this.deleteItem(e.target.parentNode,this.DOM.complete);
            this.addItem(text);
        });

        liEl.appendChild(pEl);
        liEl.appendChild(backBtn);

        return liEl;
    }

    //ゴミ箱に移動
    _deleteItem(text){
        const liEl = document.createElement('li');
        const pEl = document.createElement('p');
        const boxEl = document.createElement('div');
        const returnBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        returnBtn.innerText = '戻す';
        deleteBtn.innerText = '削除';
        pEl.innerText = text;

        //戻すをクリック
        returnBtn.addEventListener('click',e =>{
            this.deleteItem(e.target.parentNode.parentNode,this.DOM.delete);
            this.addItem(text);
        })
        
        //削除をクリック
        deleteBtn.addEventListener('click',e =>{
            const confirmation = confirm('タスクを削除してもいいですか？');
            if (confirmation) {
                this.deleteItem(e.target.parentNode.parentNode, this.DOM.delete);
            }
        })

        liEl.appendChild(pEl);
        pEl.after(boxEl);
        boxEl.appendChild(returnBtn);
        boxEl.appendChild(deleteBtn);
    
        return liEl;
    }

    //リストの追加
    addItem(text){
        this.DOM.incomplete.appendChild(this._createItem(text));
    }
    //完了に追加
    addCompleteItem(text){
        this.DOM.complete.appendChild(this._completeItem(text));
    }
    //ゴミ箱に移動
    addDeleteItem(text){
        this.DOM.delete.appendChild(this._deleteItem(text));
    }
    //リストの削除
    deleteItem(target,domparent){
        domparent.removeChild(target);
    }
}



function addtodoEveent(){
    const addItemInput = document.querySelector('.add-item');
    const addItemTxt = addItemInput.value;

    if(addItemTxt == ''){
        alert('入力してください');
        return
    }
    //フォームのリセット
    addItemInput.value = '';
    //インスタンス化
    const totoList = new TodoList();
    totoList.addItem(addItemTxt);
}

const addBtn = document.querySelector('.add-button');
addBtn.addEventListener('click',()=>{
    addtodoEveent();
});


//enterキー
document.addEventListener('keydown',keydown);
const regexEnter = new RegExp('(=|Enter)');

function keydown(e){
    if(regexEnter.test(e.key)){
        addtodoEveent();
    }
}
