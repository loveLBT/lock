const LMap=function(opts){
	this.pluginGeolocationOpts={
		enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:false      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
	}
	this.placeSearchOpts={
		pageSize:10,
        pageIndex: 1,
        extensions:'base'
	}
	this.map=new AMap.Map('map',{zoom:16})
}

LMap.prototype.toolBarPlugin=function(map){
	AMap.plugin('AMap.ToolBar',function(){ 
		const tool = new AMap.ToolBar() 
		this.map.addControl(tool) 
	}.bind(this))
}
LMap.prototype.scalePlugin=function(map){
	AMap.plugin('AMap.Scale',function(){ 
		const scale = new AMap.Scale() 
		this.map.addControl(scale) 
	}.bind(this))
}
LMap.prototype.geolocationPlugin=function(){
	const onComplete=function(data){
		if(data.info==='SUCCESS' && data.type==='complete'){
			const position=data.position

			this.placeSearch(position)
		}else{
			alert('地图获取数据出错，请再次定位')
		}
	}.bind(this)
	const onError=function(){
		alert('定位失败，请开启定位设置')
	}
	AMap.plugin('AMap.Geolocation', function () {
		const geolocation = new AMap.Geolocation(this.pluginGeolocationOpts)
		this.map.addControl(geolocation)
		geolocation.getCurrentPosition()
		AMap.event.addListener(geolocation, 'complete', onComplete)//返回定位信息
    	AMap.event.addListener(geolocation, 'error', onError)      //返回定位出错信息
	}.bind(this))
}
LMap.prototype.addPlugin=function(){
	this.toolBarPlugin()
	this.scalePlugin()
	this.geolocationPlugin()
}

LMap.prototype.placeSearch=function(position){
	AMap.service('AMap.PlaceSearch', function() {
		const placeSearch = new AMap.PlaceSearch(this.placeSearchOpts)
		placeSearch.searchNearBy('大厦',position,2000,function(status,result){
			if(status==='complete' && result.info==='OK'){
				const pois=result.poiList.pois

				pois.forEach(function(poi){
					this.createMarke(poi,position)
					
				}.bind(this))

			}else{
				alert('没有相关数据')
			}
		}.bind(this))
	}.bind(this))
}

LMap.prototype.createMarke=function(markOpts,position){
	const onTouchEnd=function(data){
		const startXY=position
		const endXY=data.lnglat

		this.driving.clear()
		this.driving.search(startXY,endXY,function(status,result){
			console.log(status)
		})
	}.bind(this)

	const mark=new AMap.Marker({
		position:markOpts.location,
		map:this.map,
		content:'<img src="http://192.168.2.108:8081/src/assets/img/building_icon.png" alt="">'
	})

	AMap.event.addListener(mark, 'touchend', onTouchEnd)
}

LMap.prototype.createDriving=function(map){
	const drivingOpts={
        map:this.map
	}
	AMap.service('AMap.Driving',function(){
	    this.driving=new AMap.Driving(drivingOpts)
	}.bind(this))
}

LMap.prototype.createMap=function(){
	this.addPlugin()
	this.createDriving()
}