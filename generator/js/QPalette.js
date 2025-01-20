
      // auto generated
      //var self;

      // class constructor:
      function QPalette() {
        

        // should be QPalette_BaseJs.call(this, engine):
        //QPalette.prototype = new QPalette_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPalette.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPalette);
                
            //}
          }
          else {
            qWarning("QPalette.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 9) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPalette_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPalette);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPalette);
  }

  
  else {
    
        print("QPalette(): wrong number / type of arguments");
      
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

      //QPalette.prototype = new QPalette_BaseJs(engine);
      //QPalette.prototype = new QPalette_Wrapper(engine);
      QPalette.prototype = new Object();

      QPalette.prototype.toString = function() {
          //return "QPalette [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPalette [JS]";
        };
      QPalette.getObjectType = function() {
        return RJSType_QPalette.getIdStatic();
      };

      QPalette.prototype.getObjectType = function() {
        return RJSType_QPalette.getIdStatic();
      };

      QPalette.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPalette.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ColorGroup
QPalette.Active = QPalette_Wrapper.Active;
QPalette.Disabled = QPalette_Wrapper.Disabled;
QPalette.Inactive = QPalette_Wrapper.Inactive;
QPalette.NColorGroups = QPalette_Wrapper.NColorGroups;
QPalette.Current = QPalette_Wrapper.Current;
QPalette.All = QPalette_Wrapper.All;
QPalette.Normal = QPalette_Wrapper.Normal;

  // enum: ColorRole
QPalette.WindowText = QPalette_Wrapper.WindowText;
QPalette.Button = QPalette_Wrapper.Button;
QPalette.Light = QPalette_Wrapper.Light;
QPalette.Midlight = QPalette_Wrapper.Midlight;
QPalette.Dark = QPalette_Wrapper.Dark;
QPalette.Mid = QPalette_Wrapper.Mid;
QPalette.Text = QPalette_Wrapper.Text;
QPalette.BrightText = QPalette_Wrapper.BrightText;
QPalette.ButtonText = QPalette_Wrapper.ButtonText;
QPalette.Base = QPalette_Wrapper.Base;
QPalette.Window = QPalette_Wrapper.Window;
QPalette.Shadow = QPalette_Wrapper.Shadow;
QPalette.Highlight = QPalette_Wrapper.Highlight;
QPalette.HighlightedText = QPalette_Wrapper.HighlightedText;
QPalette.Link = QPalette_Wrapper.Link;
QPalette.LinkVisited = QPalette_Wrapper.LinkVisited;
QPalette.AlternateBase = QPalette_Wrapper.AlternateBase;
QPalette.NoRole = QPalette_Wrapper.NoRole;
QPalette.ToolTipBase = QPalette_Wrapper.ToolTipBase;
QPalette.ToolTipText = QPalette_Wrapper.ToolTipText;
QPalette.PlaceholderText = QPalette_Wrapper.PlaceholderText;
QPalette.NColorRoles = QPalette_Wrapper.NColorRoles;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPalette.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPalette.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      