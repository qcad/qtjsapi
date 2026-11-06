
      // auto generated
      //var self;

      // class constructor:
      function QTableWidgetItem() {
        

        // should be QTableWidgetItem_BaseJs.call(this, engine):
        //QTableWidgetItem.prototype = new QTableWidgetItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTableWidgetItem.getIdStatic()))) {

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
            qWarning("QTableWidgetItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
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

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
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

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTableWidgetItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTableWidgetItem);
  }

  
  else {
    
        print("QTableWidgetItem(): wrong number / type of arguments");
      
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

      //QTableWidgetItem.prototype = new QTableWidgetItem_BaseJs(engine);
      //QTableWidgetItem.prototype = new QTableWidgetItem_Wrapper(engine);
      QTableWidgetItem.prototype = new Object();


      QTableWidgetItem.prototype.toString = function() {
          //return "QTableWidgetItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTableWidgetItem [JS]";
        };
      QTableWidgetItem.getObjectType = function() {
        return RJSType_QTableWidgetItem.getIdStatic();
      };

      QTableWidgetItem.prototype.getObjectType = function() {
        return RJSType_QTableWidgetItem.getIdStatic();
      };

      QTableWidgetItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTableWidgetItem.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ItemType
QTableWidgetItem.Type = QTableWidgetItem_Wrapper.Type;
QTableWidgetItem.UserType = QTableWidgetItem_Wrapper.UserType;


      // functions:
      
        // function 
        QTableWidgetItem.prototype.clone = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.tableWidget = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.tableWidget");
          
              return this.__PROXY__.tableWidget(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.row = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.row");
          
              return this.__PROXY__.row(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.column = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.column");
          
              return this.__PROXY__.column(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setSelected = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setSelected");
          
              return this.__PROXY__.setSelected(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.isSelected = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.isSelected");
          
              return this.__PROXY__.isSelected(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.flags = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.flags");
          
              return this.__PROXY__.flags(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.text = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setText = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.icon = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.statusTip = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.statusTip");
          
              return this.__PROXY__.statusTip(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.toolTip = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.toolTip");
          
              return this.__PROXY__.toolTip(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.whatsThis = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.whatsThis");
          
              return this.__PROXY__.whatsThis(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.font = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setTextAlignment = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setTextAlignment");
          
              return this.__PROXY__.setTextAlignment(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.background = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.foreground = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.foreground");
          
              return this.__PROXY__.foreground(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setForeground = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setForeground");
          
              return this.__PROXY__.setForeground(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.checkState = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.checkState");
          
              return this.__PROXY__.checkState(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setCheckState = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setCheckState");
          
              return this.__PROXY__.setCheckState(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setSizeHint = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setSizeHint");
          
              return this.__PROXY__.setSizeHint(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.data = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.setData = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.type = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QTableWidgetItem.prototype.tableModel = function(...args) 
          
        {
          //print("JS: QTableWidgetItem.prototype.tableModel");
          
              return this.__PROXY__.tableModel(...args);
            
        };
        

      // static functions:
      QTableWidgetItem.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTableWidgetItem.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTableWidgetItem.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTableWidgetItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTableWidgetItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTableWidgetItem.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      