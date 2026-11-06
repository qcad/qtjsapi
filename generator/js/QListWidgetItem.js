
      // auto generated
      //var self;

      // class constructor:
      function QListWidgetItem() {
        

        // should be QListWidgetItem_BaseJs.call(this, engine):
        //QListWidgetItem.prototype = new QListWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QListWidgetItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QListWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QListWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QListWidgetItem);
  }

  
  else {
    
        print("QListWidgetItem(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //QListWidgetItem.prototype = new QListWidgetItem_BaseJs(engine);
      //QListWidgetItem.prototype = new QListWidgetItem_Wrapper(engine);
      QListWidgetItem.prototype = new Object();


      QListWidgetItem.prototype.toString = function() {
          //return "QListWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QListWidgetItem [JS]";
        };
      QListWidgetItem.getObjectType = function() {
        return RJSType_QListWidgetItem.getIdStatic();
      };

      QListWidgetItem.prototype.getObjectType = function() {
        return RJSType_QListWidgetItem.getIdStatic();
      };

      QListWidgetItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QListWidgetItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ItemType
QListWidgetItem.Type = QListWidgetItem_Wrapper.Type;
QListWidgetItem.UserType = QListWidgetItem_Wrapper.UserType;


      // functions:
      
        // function 
        QListWidgetItem.prototype.clone = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.listWidget = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.listWidget");
          
              return this.__PROXY__.listWidget(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setSelected = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setSelected");
          
              return this.__PROXY__.setSelected(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.isSelected = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.flags = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.text = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setText = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.icon = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.statusTip = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.statusTip");
          
              return this.__PROXY__.statusTip(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.whatsThis = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.whatsThis");
          
              return this.__PROXY__.whatsThis(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.font = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setFont = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.textAlignment = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.textAlignment");
          
              return this.__PROXY__.textAlignment(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setTextAlignment = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setTextAlignment");
          
              return this.__PROXY__.setTextAlignment(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.background = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.foreground = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.checkState = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.checkState");
          
              return this.__PROXY__.checkState(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setCheckState = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setCheckState");
          
              return this.__PROXY__.setCheckState(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setSizeHint = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setSizeHint");
          
              return this.__PROXY__.setSizeHint(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.data = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.setData = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.type = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QListWidgetItem.prototype.listModel = function(...args) 
          
        {
          //print("JS: QListWidgetItem.prototype.listModel");
          
              return this.__PROXY__.listModel(...args);
            
        };
    

      // static functions:
      QListWidgetItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QListWidgetItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QListWidgetItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QListWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QListWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QListWidgetItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      