
  // Auto generated
  
    #ifndef QKEYSEQUENCE_H_WRAPPER
    #define QKEYSEQUENCE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QKeySequence>
      
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QKeySequence>
      
      // singleton class wrapper for static functions:
      class QKeySequence_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QKeySequence_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QKeySequence
    // Function: fromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  fromString
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
            
    // Class: QKeySequence
    // Function: listFromString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  listFromString
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
            
    // Class: QKeySequence
    // Function: listToString
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  listToString
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
            
    // Class: QKeySequence
    // Function: mnemonic
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mnemonic
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QKeySequence
    // Function: keyBindings
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyBindings
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QKeySequence_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QKeySequence
    class QKeySequence_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QKeySequence_Wrapper(const QKeySequence_Wrapper&);

    public:
      // initialization of QKeySequence:
      static void init(RJSApi& handler);

      
        static QKeySequence* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QKeySequence.length(); i++) {
            RJSBasecaster_QKeySequence* basecaster = basecasters_QKeySequence[i];
            QKeySequence* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QKeySequence::getIdStatic()) {
            return (QKeySequence*)vp;
          }

          qWarning() << "QKeySequence_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QKeySequence* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QKeySequence*: wrapper wraps NULL";
          }

          QKeySequence* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QKeySequence*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum StandardKey {
    UnknownKey = QKeySequence::UnknownKey,
HelpContents = QKeySequence::HelpContents,
WhatsThis = QKeySequence::WhatsThis,
Open = QKeySequence::Open,
Close = QKeySequence::Close,
Save = QKeySequence::Save,
New = QKeySequence::New,
Delete = QKeySequence::Delete,
Cut = QKeySequence::Cut,
Copy = QKeySequence::Copy,
Paste = QKeySequence::Paste,
Undo = QKeySequence::Undo,
Redo = QKeySequence::Redo,
Back = QKeySequence::Back,
Forward = QKeySequence::Forward,
Refresh = QKeySequence::Refresh,
ZoomIn = QKeySequence::ZoomIn,
ZoomOut = QKeySequence::ZoomOut,
Print = QKeySequence::Print,
AddTab = QKeySequence::AddTab,
NextChild = QKeySequence::NextChild,
PreviousChild = QKeySequence::PreviousChild,
Find = QKeySequence::Find,
FindNext = QKeySequence::FindNext,
FindPrevious = QKeySequence::FindPrevious,
Replace = QKeySequence::Replace,
SelectAll = QKeySequence::SelectAll,
Bold = QKeySequence::Bold,
Italic = QKeySequence::Italic,
Underline = QKeySequence::Underline,
MoveToNextChar = QKeySequence::MoveToNextChar,
MoveToPreviousChar = QKeySequence::MoveToPreviousChar,
MoveToNextWord = QKeySequence::MoveToNextWord,
MoveToPreviousWord = QKeySequence::MoveToPreviousWord,
MoveToNextLine = QKeySequence::MoveToNextLine,
MoveToPreviousLine = QKeySequence::MoveToPreviousLine,
MoveToNextPage = QKeySequence::MoveToNextPage,
MoveToPreviousPage = QKeySequence::MoveToPreviousPage,
MoveToStartOfLine = QKeySequence::MoveToStartOfLine,
MoveToEndOfLine = QKeySequence::MoveToEndOfLine,
MoveToStartOfBlock = QKeySequence::MoveToStartOfBlock,
MoveToEndOfBlock = QKeySequence::MoveToEndOfBlock,
MoveToStartOfDocument = QKeySequence::MoveToStartOfDocument,
MoveToEndOfDocument = QKeySequence::MoveToEndOfDocument,
SelectNextChar = QKeySequence::SelectNextChar,
SelectPreviousChar = QKeySequence::SelectPreviousChar,
SelectNextWord = QKeySequence::SelectNextWord,
SelectPreviousWord = QKeySequence::SelectPreviousWord,
SelectNextLine = QKeySequence::SelectNextLine,
SelectPreviousLine = QKeySequence::SelectPreviousLine,
SelectNextPage = QKeySequence::SelectNextPage,
SelectPreviousPage = QKeySequence::SelectPreviousPage,
SelectStartOfLine = QKeySequence::SelectStartOfLine,
SelectEndOfLine = QKeySequence::SelectEndOfLine,
SelectStartOfBlock = QKeySequence::SelectStartOfBlock,
SelectEndOfBlock = QKeySequence::SelectEndOfBlock,
SelectStartOfDocument = QKeySequence::SelectStartOfDocument,
SelectEndOfDocument = QKeySequence::SelectEndOfDocument,
DeleteStartOfWord = QKeySequence::DeleteStartOfWord,
DeleteEndOfWord = QKeySequence::DeleteEndOfWord,
DeleteEndOfLine = QKeySequence::DeleteEndOfLine,
InsertParagraphSeparator = QKeySequence::InsertParagraphSeparator,
InsertLineSeparator = QKeySequence::InsertLineSeparator,
SaveAs = QKeySequence::SaveAs,
Preferences = QKeySequence::Preferences,
Quit = QKeySequence::Quit,
FullScreen = QKeySequence::FullScreen,
Deselect = QKeySequence::Deselect,
DeleteCompleteLine = QKeySequence::DeleteCompleteLine,
Backspace = QKeySequence::Backspace,
Cancel = QKeySequence::Cancel,

  };
  Q_ENUM(StandardKey)

  enum SequenceFormat {
    NativeText = QKeySequence::NativeText,
PortableText = QKeySequence::PortableText,

  };
  Q_ENUM(SequenceFormat)

  enum SequenceMatch {
    NoMatch = QKeySequence::NoMatch,
PartialMatch = QKeySequence::PartialMatch,
ExactMatch = QKeySequence::ExactMatch,

  };
  Q_ENUM(SequenceMatch)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QKeySequence_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QKeySequence_Wrapper(RJSApi& h, QKeySequence* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QKeySequence_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QKeySequence
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QKeySequence_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QKeySequence
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
            
    // Class: QKeySequence
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QKeySequence
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  
                          // special function name for JS wrapper:
                          toStr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QKeySequence
    // Function: matches
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  matches
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QKeySequence
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
            
    // Class: QKeySequence
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDetached
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
          return RJSType_QKeySequence::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QKeySequence* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QKeySequence* getWrapped() const {
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
        QKeySequence* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QKeySequence*> basecasters_QKeySequence;

      public:
        static void registerBasecaster_QKeySequence(RJSBasecaster_QKeySequence* bc) {
          basecasters_QKeySequence.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QKeySequence_Wrapper*)

    Q_DECLARE_INTERFACE(QKeySequence_Wrapper, "org.qcad.QKeySequence_Wrapper")

  
  #endif
  
