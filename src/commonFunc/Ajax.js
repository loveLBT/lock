import queryString from 'query-string'
import objectAssign from 'object-assign'
import api from '..//constants/Api'

const Ajax=function(opts){
	this.getUrlParams=opts.params
	this.getUrl=api.path+opts.url+"?"+queryString.stringify(this.getUrlParams)
	this.postUrl=api.path+opts.url
	this.putUrl=api.path+opts.url
	this.delete=api.path+opts.url
	this.data=objectAssign({},opts.data)
}

Ajax.prototype.get=function(){
	const p=new Promise((resolve,reject)=>{
		fetch(this.getUrl)
			.then((response)=>response.json())
			.then((res)=>resolve(res))
			.catch((error)=>reject(error))
	})
	return p
}

Ajax.prototype.post=function(){
	const p=new Promise((resolve,reject)=>{
		fetch(this.postUrl,{
			method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			mode:'cors',
			body:JSON.stringify(this.data)
		})
		.then(response=>response.json())
		.then(res=>resolve(res))
		.catch(error=>reject(error))
	})
	return p
}

export default Ajax