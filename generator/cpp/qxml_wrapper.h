
  // Auto generated
  
    #ifndef QXML_H_WRAPPER
    #define QXML_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QXmlAttributes>
      
        #include <QXmlContentHandler>
      
        #include <QXmlDefaultHandler>
      
        #include <QXmlDTDHandler>
      
        #include <QXmlEntityResolver>
      
        #include <QXmlErrorHandler>
      
        #include <QXmlLexicalHandler>
      
        #include <QXmlDeclHandler>
      
        #include <QXmlInputSource>
      
        #include <QXmlLocator>
      
        #include <QXmlParseException>
      
        #include <QXmlReader>
      
        #include <QXmlSimpleReader>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlAttributes>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlAttributes
    class QXmlAttributes_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlAttributes_Wrapper(const QXmlAttributes_Wrapper&);

    public:
      // initialization of QXmlAttributes:
      static void init(RJSApi& handler);

      
        static QXmlAttributes* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlAttributes:
          for (int i=0; i<basecasters_QXmlAttributes.length(); i++) {
            RJSBasecaster_QXmlAttributes* basecaster = basecasters_QXmlAttributes[i];
            QXmlAttributes* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlAttributes:
          if (t==RJSType_QXmlAttributes::getIdStatic()) {
            return (QXmlAttributes*)vp;
          }

          qWarning() << "QXmlAttributes_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlAttributes* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlAttributes*: wrapper wraps NULL";
          }

          QXmlAttributes* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlAttributes*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlAttributes_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlAttributes_Wrapper(RJSApi& h, QXmlAttributes* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlAttributes_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlAttributes
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlAttributes_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlAttributes
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlAttributes
    // Function: index
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  index
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: length
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  length
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: count
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  count
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: localName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: qName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  qName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: uri
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  uri
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  value
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlAttributes
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QXmlAttributes
    // Function: append
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  append
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlAttributes::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlAttributes* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlAttributes* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlAttributes* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlAttributes*> basecasters_QXmlAttributes;

      public:
        static void registerBasecaster_QXmlAttributes(RJSBasecaster_QXmlAttributes* bc) {
          basecasters_QXmlAttributes.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlAttributes_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlAttributes_Wrapper, "org.qcad.QXmlAttributes_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlInputSource>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlInputSource
    class QXmlInputSource_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlInputSource_Wrapper(const QXmlInputSource_Wrapper&);

    public:
      // initialization of QXmlInputSource:
      static void init(RJSApi& handler);

      
        static QXmlInputSource* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlInputSource:
          for (int i=0; i<basecasters_QXmlInputSource.length(); i++) {
            RJSBasecaster_QXmlInputSource* basecaster = basecasters_QXmlInputSource[i];
            QXmlInputSource* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlInputSource:
          if (t==RJSType_QXmlInputSource::getIdStatic()) {
            return (QXmlInputSource*)vp;
          }

          qWarning() << "QXmlInputSource_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlInputSource* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlInputSource*: wrapper wraps NULL";
          }

          QXmlInputSource* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlInputSource*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlInputSource_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlInputSource_Wrapper(RJSApi& h, QXmlInputSource* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlInputSource_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlInputSource
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlInputSource_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlInputSource
    // Function: setData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlInputSource
    // Function: fetchData
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fetchData
              (

                
              )
              
              ;
            
    // Class: QXmlInputSource
    // Function: data
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  data
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlInputSource
    // Function: next
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  next
              (

                
              )
              
              ;
            
    // Class: QXmlInputSource
    // Function: reset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlInputSource::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlInputSource* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlInputSource* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlInputSource* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlInputSource*> basecasters_QXmlInputSource;

      public:
        static void registerBasecaster_QXmlInputSource(RJSBasecaster_QXmlInputSource* bc) {
          basecasters_QXmlInputSource.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlInputSource_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlInputSource_Wrapper, "org.qcad.QXmlInputSource_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlParseException>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlParseException
    class QXmlParseException_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlParseException_Wrapper(const QXmlParseException_Wrapper&);

    public:
      // initialization of QXmlParseException:
      static void init(RJSApi& handler);

      
        static QXmlParseException* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlParseException:
          for (int i=0; i<basecasters_QXmlParseException.length(); i++) {
            RJSBasecaster_QXmlParseException* basecaster = basecasters_QXmlParseException[i];
            QXmlParseException* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlParseException:
          if (t==RJSType_QXmlParseException::getIdStatic()) {
            return (QXmlParseException*)vp;
          }

          qWarning() << "QXmlParseException_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlParseException* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlParseException*: wrapper wraps NULL";
          }

          QXmlParseException* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlParseException*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlParseException_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlParseException_Wrapper(RJSApi& h, QXmlParseException* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlParseException_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlParseException
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlParseException_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlParseException
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlParseException
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlParseException
    // Function: publicId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  publicId
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlParseException
    // Function: systemId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemId
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlParseException
    // Function: message
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  message
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlParseException::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlParseException* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlParseException* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlParseException* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlParseException*> basecasters_QXmlParseException;

      public:
        static void registerBasecaster_QXmlParseException(RJSBasecaster_QXmlParseException* bc) {
          basecasters_QXmlParseException.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlParseException_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlParseException_Wrapper, "org.qcad.QXmlParseException_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlReader>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlReader
    class QXmlReader_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlReader_Wrapper(const QXmlReader_Wrapper&);

    public:
      // initialization of QXmlReader:
      static void init(RJSApi& handler);

      
        static QXmlReader* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlSimpleReader::getIdStatic()) {
                return (QXmlReader*)(QXmlSimpleReader*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlReader:
          for (int i=0; i<basecasters_QXmlReader.length(); i++) {
            RJSBasecaster_QXmlReader* basecaster = basecasters_QXmlReader[i];
            QXmlReader* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlReader:
          if (t==RJSType_QXmlReader::getIdStatic()) {
            return (QXmlReader*)vp;
          }

          qWarning() << "QXmlReader_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlReader* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlReader*: wrapper wraps NULL";
          }

          QXmlReader* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlReader*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlReader_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlReader_Wrapper(RJSApi& h, QXmlReader* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlReader_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlReader
    // Function: feature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  feature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setFeature
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFeature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: hasFeature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFeature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setEntityResolver
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEntityResolver
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: entityResolver
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  entityResolver
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setDTDHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDTDHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: DTDHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  DTDHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setContentHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContentHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: contentHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setErrorHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setErrorHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: errorHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setLexicalHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLexicalHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: lexicalHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lexicalHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: setDeclHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDeclHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlReader
    // Function: declHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  declHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlReader
    // Function: parse
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlReader::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlReader* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlReader* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlReader* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlReader*> basecasters_QXmlReader;

      public:
        static void registerBasecaster_QXmlReader(RJSBasecaster_QXmlReader* bc) {
          basecasters_QXmlReader.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlReader_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlReader_Wrapper, "org.qcad.QXmlReader_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlSimpleReader>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlSimpleReader
    class QXmlSimpleReader_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlSimpleReader_Wrapper(const QXmlSimpleReader_Wrapper&);

    public:
      // initialization of QXmlSimpleReader:
      static void init(RJSApi& handler);

      
        static QXmlSimpleReader* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlSimpleReader:
          for (int i=0; i<basecasters_QXmlSimpleReader.length(); i++) {
            RJSBasecaster_QXmlSimpleReader* basecaster = basecasters_QXmlSimpleReader[i];
            QXmlSimpleReader* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlSimpleReader:
          if (t==RJSType_QXmlSimpleReader::getIdStatic()) {
            return (QXmlSimpleReader*)vp;
          }

          qWarning() << "QXmlSimpleReader_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlSimpleReader* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlSimpleReader*: wrapper wraps NULL";
          }

          QXmlSimpleReader* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlSimpleReader*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlSimpleReader_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlSimpleReader_Wrapper(RJSApi& h, QXmlSimpleReader* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlSimpleReader_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlSimpleReader
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlSimpleReader_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlSimpleReader
    // Function: feature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  feature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setFeature
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFeature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: hasFeature
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasFeature
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: hasProperty
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setEntityResolver
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEntityResolver
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: entityResolver
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  entityResolver
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setDTDHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDTDHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: DTDHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  DTDHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setContentHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setContentHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: contentHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setErrorHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setErrorHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: errorHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setLexicalHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLexicalHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: lexicalHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lexicalHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: setDeclHandler
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDeclHandler
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: declHandler
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  declHandler
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: parse
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parse
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlSimpleReader
    // Function: parseContinue
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parseContinue
              (

                
              )
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlSimpleReader::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlSimpleReader* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlSimpleReader* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlSimpleReader* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlSimpleReader*> basecasters_QXmlSimpleReader;

      public:
        static void registerBasecaster_QXmlSimpleReader(RJSBasecaster_QXmlSimpleReader* bc) {
          basecasters_QXmlSimpleReader.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlSimpleReader_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlSimpleReader_Wrapper, "org.qcad.QXmlSimpleReader_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlLocator>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlLocator
    class QXmlLocator_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlLocator_Wrapper(const QXmlLocator_Wrapper&);

    public:
      // initialization of QXmlLocator:
      static void init(RJSApi& handler);

      
        static QXmlLocator* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlLocator:
          for (int i=0; i<basecasters_QXmlLocator.length(); i++) {
            RJSBasecaster_QXmlLocator* basecaster = basecasters_QXmlLocator[i];
            QXmlLocator* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlLocator:
          if (t==RJSType_QXmlLocator::getIdStatic()) {
            return (QXmlLocator*)vp;
          }

          qWarning() << "QXmlLocator_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlLocator* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlLocator*: wrapper wraps NULL";
          }

          QXmlLocator* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlLocator*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlLocator_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlLocator_Wrapper(RJSApi& h, QXmlLocator* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlLocator_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlLocator
    // Function: columnNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  columnNumber
              (

                
              )
              
                const
              
              ;
            
    // Class: QXmlLocator
    // Function: lineNumber
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lineNumber
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlLocator::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlLocator* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlLocator* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlLocator* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlLocator*> basecasters_QXmlLocator;

      public:
        static void registerBasecaster_QXmlLocator(RJSBasecaster_QXmlLocator* bc) {
          basecasters_QXmlLocator.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlLocator_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlLocator_Wrapper, "org.qcad.QXmlLocator_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlContentHandler>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlContentHandler
    class QXmlContentHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlContentHandler_Wrapper(const QXmlContentHandler_Wrapper&);

    public:
      // initialization of QXmlContentHandler:
      static void init(RJSApi& handler);

      
        static QXmlContentHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlContentHandler*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlContentHandler:
          for (int i=0; i<basecasters_QXmlContentHandler.length(); i++) {
            RJSBasecaster_QXmlContentHandler* basecaster = basecasters_QXmlContentHandler[i];
            QXmlContentHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlContentHandler:
          if (t==RJSType_QXmlContentHandler::getIdStatic()) {
            return (QXmlContentHandler*)vp;
          }

          qWarning() << "QXmlContentHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlContentHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlContentHandler*: wrapper wraps NULL";
          }

          QXmlContentHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlContentHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlContentHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlContentHandler_Wrapper(RJSApi& h, QXmlContentHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlContentHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlContentHandler
    // Function: setDocumentLocator
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDocumentLocator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: startDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startDocument
              (

                
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: endDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endDocument
              (

                
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: startPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startPrefixMapping
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: endPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endPrefixMapping
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: startElement
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: endElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endElement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: characters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  characters
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: ignorableWhitespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignorableWhitespace
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: processingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  processingInstruction
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: skippedEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  skippedEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlContentHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlContentHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlContentHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlContentHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlContentHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlContentHandler*> basecasters_QXmlContentHandler;

      public:
        static void registerBasecaster_QXmlContentHandler(RJSBasecaster_QXmlContentHandler* bc) {
          basecasters_QXmlContentHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlContentHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlContentHandler_Wrapper, "org.qcad.QXmlContentHandler_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlErrorHandler>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlErrorHandler
    class QXmlErrorHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlErrorHandler_Wrapper(const QXmlErrorHandler_Wrapper&);

    public:
      // initialization of QXmlErrorHandler:
      static void init(RJSApi& handler);

      
        static QXmlErrorHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlErrorHandler*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlErrorHandler:
          for (int i=0; i<basecasters_QXmlErrorHandler.length(); i++) {
            RJSBasecaster_QXmlErrorHandler* basecaster = basecasters_QXmlErrorHandler[i];
            QXmlErrorHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlErrorHandler:
          if (t==RJSType_QXmlErrorHandler::getIdStatic()) {
            return (QXmlErrorHandler*)vp;
          }

          qWarning() << "QXmlErrorHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlErrorHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlErrorHandler*: wrapper wraps NULL";
          }

          QXmlErrorHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlErrorHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlErrorHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlErrorHandler_Wrapper(RJSApi& h, QXmlErrorHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlErrorHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlErrorHandler
    // Function: warning
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  warning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlErrorHandler
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlErrorHandler
    // Function: fatalError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fatalError
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlErrorHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlErrorHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlErrorHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlErrorHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlErrorHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlErrorHandler*> basecasters_QXmlErrorHandler;

      public:
        static void registerBasecaster_QXmlErrorHandler(RJSBasecaster_QXmlErrorHandler* bc) {
          basecasters_QXmlErrorHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlErrorHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlErrorHandler_Wrapper, "org.qcad.QXmlErrorHandler_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlDTDHandler>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlDTDHandler
    class QXmlDTDHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlDTDHandler_Wrapper(const QXmlDTDHandler_Wrapper&);

    public:
      // initialization of QXmlDTDHandler:
      static void init(RJSApi& handler);

      
        static QXmlDTDHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlDTDHandler*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlDTDHandler:
          for (int i=0; i<basecasters_QXmlDTDHandler.length(); i++) {
            RJSBasecaster_QXmlDTDHandler* basecaster = basecasters_QXmlDTDHandler[i];
            QXmlDTDHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlDTDHandler:
          if (t==RJSType_QXmlDTDHandler::getIdStatic()) {
            return (QXmlDTDHandler*)vp;
          }

          qWarning() << "QXmlDTDHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlDTDHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlDTDHandler*: wrapper wraps NULL";
          }

          QXmlDTDHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlDTDHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlDTDHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlDTDHandler_Wrapper(RJSApi& h, QXmlDTDHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlDTDHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlDTDHandler
    // Function: notationDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notationDecl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDTDHandler
    // Function: unparsedEntityDecl
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unparsedEntityDecl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDTDHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlDTDHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlDTDHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlDTDHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlDTDHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlDTDHandler*> basecasters_QXmlDTDHandler;

      public:
        static void registerBasecaster_QXmlDTDHandler(RJSBasecaster_QXmlDTDHandler* bc) {
          basecasters_QXmlDTDHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlDTDHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlDTDHandler_Wrapper, "org.qcad.QXmlDTDHandler_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlEntityResolver>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlEntityResolver
    class QXmlEntityResolver_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlEntityResolver_Wrapper(const QXmlEntityResolver_Wrapper&);

    public:
      // initialization of QXmlEntityResolver:
      static void init(RJSApi& handler);

      
        static QXmlEntityResolver* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlEntityResolver*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlEntityResolver:
          for (int i=0; i<basecasters_QXmlEntityResolver.length(); i++) {
            RJSBasecaster_QXmlEntityResolver* basecaster = basecasters_QXmlEntityResolver[i];
            QXmlEntityResolver* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlEntityResolver:
          if (t==RJSType_QXmlEntityResolver::getIdStatic()) {
            return (QXmlEntityResolver*)vp;
          }

          qWarning() << "QXmlEntityResolver_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlEntityResolver* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlEntityResolver*: wrapper wraps NULL";
          }

          QXmlEntityResolver* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlEntityResolver*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlEntityResolver_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlEntityResolver_Wrapper(RJSApi& h, QXmlEntityResolver* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlEntityResolver_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlEntityResolver
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlEntityResolver::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlEntityResolver* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlEntityResolver* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlEntityResolver* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlEntityResolver*> basecasters_QXmlEntityResolver;

      public:
        static void registerBasecaster_QXmlEntityResolver(RJSBasecaster_QXmlEntityResolver* bc) {
          basecasters_QXmlEntityResolver.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlEntityResolver_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlEntityResolver_Wrapper, "org.qcad.QXmlEntityResolver_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlLexicalHandler>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlLexicalHandler
    class QXmlLexicalHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlLexicalHandler_Wrapper(const QXmlLexicalHandler_Wrapper&);

    public:
      // initialization of QXmlLexicalHandler:
      static void init(RJSApi& handler);

      
        static QXmlLexicalHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlLexicalHandler*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlLexicalHandler:
          for (int i=0; i<basecasters_QXmlLexicalHandler.length(); i++) {
            RJSBasecaster_QXmlLexicalHandler* basecaster = basecasters_QXmlLexicalHandler[i];
            QXmlLexicalHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlLexicalHandler:
          if (t==RJSType_QXmlLexicalHandler::getIdStatic()) {
            return (QXmlLexicalHandler*)vp;
          }

          qWarning() << "QXmlLexicalHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlLexicalHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlLexicalHandler*: wrapper wraps NULL";
          }

          QXmlLexicalHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlLexicalHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlLexicalHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlLexicalHandler_Wrapper(RJSApi& h, QXmlLexicalHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlLexicalHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlLexicalHandler
    // Function: startDTD
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startDTD
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: endDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endDTD
              (

                
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: endEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endEntity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: startCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startCDATA
              (

                
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: endCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  endCDATA
              (

                
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: comment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  comment
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlLexicalHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlLexicalHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlLexicalHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlLexicalHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlLexicalHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlLexicalHandler*> basecasters_QXmlLexicalHandler;

      public:
        static void registerBasecaster_QXmlLexicalHandler(RJSBasecaster_QXmlLexicalHandler* bc) {
          basecasters_QXmlLexicalHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlLexicalHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlLexicalHandler_Wrapper, "org.qcad.QXmlLexicalHandler_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlDeclHandler>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlDeclHandler
    class QXmlDeclHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlDeclHandler_Wrapper(const QXmlDeclHandler_Wrapper&);

    public:
      // initialization of QXmlDeclHandler:
      static void init(RJSApi& handler);

      
        static QXmlDeclHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
                return (QXmlDeclHandler*)(QXmlDefaultHandler*)vp;
              }
              

          // hook for modules to cast from other types to base QXmlDeclHandler:
          for (int i=0; i<basecasters_QXmlDeclHandler.length(); i++) {
            RJSBasecaster_QXmlDeclHandler* basecaster = basecasters_QXmlDeclHandler[i];
            QXmlDeclHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlDeclHandler:
          if (t==RJSType_QXmlDeclHandler::getIdStatic()) {
            return (QXmlDeclHandler*)vp;
          }

          qWarning() << "QXmlDeclHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlDeclHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlDeclHandler*: wrapper wraps NULL";
          }

          QXmlDeclHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlDeclHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlDeclHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlDeclHandler_Wrapper(RJSApi& h, QXmlDeclHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlDeclHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QXmlDeclHandler
    // Function: attributeDecl
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  attributeDecl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDeclHandler
    // Function: internalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  internalEntityDecl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDeclHandler
    // Function: externalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  externalEntityDecl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDeclHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlDeclHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QXmlDeclHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlDeclHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QXmlDeclHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlDeclHandler*> basecasters_QXmlDeclHandler;

      public:
        static void registerBasecaster_QXmlDeclHandler(RJSBasecaster_QXmlDeclHandler* bc) {
          basecasters_QXmlDeclHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlDeclHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlDeclHandler_Wrapper, "org.qcad.QXmlDeclHandler_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QXmlDefaultHandler>
      
      // wrapped object is QXmlDefaultHandler_Base class if new object is created: 
      #include "qxml_base.h"
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QXmlDefaultHandler
    class QXmlDefaultHandler_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QXmlDefaultHandler_Wrapper(const QXmlDefaultHandler_Wrapper&);

    public:
      // initialization of QXmlDefaultHandler:
      static void init(RJSApi& handler);

      
        static QXmlDefaultHandler* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QXmlDefaultHandler:
          for (int i=0; i<basecasters_QXmlDefaultHandler.length(); i++) {
            RJSBasecaster_QXmlDefaultHandler* basecaster = basecasters_QXmlDefaultHandler[i];
            QXmlDefaultHandler* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QXmlDefaultHandler:
          if (t==RJSType_QXmlDefaultHandler::getIdStatic()) {
            return (QXmlDefaultHandler*)vp;
          }

          qWarning() << "QXmlDefaultHandler_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QXmlDefaultHandler* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QXmlDefaultHandler*: wrapper wraps NULL";
          }

          QXmlDefaultHandler* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QXmlDefaultHandler*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QXmlDefaultHandler_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QXmlDefaultHandler_Wrapper(RJSApi& h, QXmlDefaultHandler* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QXmlDefaultHandler_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QXmlDefaultHandler
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QXmlDefaultHandler_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
              )
              
              ;
            

    // non-static functions:
    
    // Class: QXmlDefaultHandler
    // Function: warning
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  warning
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: error
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: fatalError
    // Source: QXmlErrorHandler
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fatalError
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: setDocumentLocator
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      setDocumentLocatorSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startDocumentSuper
                    
              (

                
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endDocument
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endDocumentSuper
                    
              (

                
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startPrefixMappingSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endPrefixMapping
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endPrefixMappingSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startElement
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startElementSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endElement
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endElementSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: characters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      charactersSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: ignorableWhitespace
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      ignorableWhitespaceSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: processingInstruction
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      processingInstructionSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: skippedEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      skippedEntitySuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: notationDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      notationDeclSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: unparsedEntityDecl
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      unparsedEntityDeclSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startDTD
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startDTDSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endDTD
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endDTDSuper
                    
              (

                
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startEntitySuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endEntity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endEntitySuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: startCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      startCDATASuper
                    
              (

                
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: endCDATA
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      endCDATASuper
                    
              (

                
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: comment
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      commentSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: attributeDecl
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      attributeDeclSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: internalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      internalEntityDeclSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: externalEntityDecl
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      externalEntityDeclSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
    // Class: QXmlDefaultHandler
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is public, virtual and overridable, this function can be called from JS implementation to call implementation of super class: 
                      errorStringSuper
                    
              (

                
              )
              
                const
              
              ;
            

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QXmlDefaultHandler::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QXmlDefaultHandler* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QXmlDefaultHandler* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        
          // get wrapped base object or nullptr:
          QXmlDefaultHandler_Base* getWrappedBase() {
            QXmlDefaultHandler* w = getWrapped();
            return dynamic_cast<QXmlDefaultHandler_Base*>(w);
          }

          QXmlDefaultHandler_Base* getWrappedBase() const {
            QXmlDefaultHandler* w = getWrapped();
            return dynamic_cast<QXmlDefaultHandler_Base*>(w);
          }
        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        
          //void setRecFlag(bool on) const {
          //  QXmlDefaultHandler_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QXmlDefaultHandler* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QXmlDefaultHandler*> basecasters_QXmlDefaultHandler;

      public:
        static void registerBasecaster_QXmlDefaultHandler(RJSBasecaster_QXmlDefaultHandler* bc) {
          basecasters_QXmlDefaultHandler.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QXmlDefaultHandler_Wrapper*)

    Q_DECLARE_INTERFACE(QXmlDefaultHandler_Wrapper, "org.qcad.QXmlDefaultHandler_Wrapper")

  
  #endif
  
