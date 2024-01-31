
      // auto generated
      //var self;

      // class constructor:
      function QTabBar() {
        

        // should be QTabBar_BaseJs.call(this, engine):
        //QTabBar.prototype = new QTabBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTabBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTabBar);
            //}
          }
          else {
            qWarning("QTabBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTabBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTabBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["currentChanged(int)"] = Object.getPrototypeOf(this).currentChanged;
  
    this["tabCloseRequested(int)"] = Object.getPrototypeOf(this).tabCloseRequested;
  
    this["tabMoved(int,int)"] = Object.getPrototypeOf(this).tabMoved;
  
    this["tabBarClicked(int)"] = Object.getPrototypeOf(this).tabBarClicked;
  
    this["tabBarDoubleClicked(int)"] = Object.getPrototypeOf(this).tabBarDoubleClicked;
  
          }
        }
      }

      //QTabBar.prototype = new QTabBar_BaseJs(engine);
      //QTabBar.prototype = new QTabBar_Wrapper(engine);
      QTabBar.prototype = new Object();

      QTabBar.prototype.toString = function() {
          //return "QTabBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTabBar [JS]";
        };
      QTabBar.getObjectType = function() {
        return RJSType_QTabBar.getIdStatic();
      };

      QTabBar.prototype.getObjectType = function() {
        return RJSType_QTabBar.getIdStatic();
      };

      QTabBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTabBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QTabBar.RoundedNorth = QTabBar_Wrapper.RoundedNorth;
QTabBar.RoundedSouth = QTabBar_Wrapper.RoundedSouth;
QTabBar.RoundedWest = QTabBar_Wrapper.RoundedWest;
QTabBar.RoundedEast = QTabBar_Wrapper.RoundedEast;
QTabBar.TriangularNorth = QTabBar_Wrapper.TriangularNorth;
QTabBar.TriangularSouth = QTabBar_Wrapper.TriangularSouth;
QTabBar.TriangularWest = QTabBar_Wrapper.TriangularWest;
QTabBar.TriangularEast = QTabBar_Wrapper.TriangularEast;

  // enum: ButtonPosition
QTabBar.LeftSide = QTabBar_Wrapper.LeftSide;
QTabBar.RightSide = QTabBar_Wrapper.RightSide;

  // enum: SelectionBehavior
QTabBar.SelectLeftTab = QTabBar_Wrapper.SelectLeftTab;
QTabBar.SelectRightTab = QTabBar_Wrapper.SelectRightTab;
QTabBar.SelectPreviousTab = QTabBar_Wrapper.SelectPreviousTab;


      // functions:
      

      // static functions:
      

        // static function 
        QTabBar.tr = function() 
          
        {
          //print("JS: QTabBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTabBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabBar.setTabOrder = function() 
          
        {
          //print("JS: QTabBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTabBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabBar.mouseGrabber = function() 
          
        {
          //print("JS: QTabBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTabBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabBar.keyboardGrabber = function() 
          
        {
          //print("JS: QTabBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTabBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTabBar);
  }

  
  else {
    
        print("QTabBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTabBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTabBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    