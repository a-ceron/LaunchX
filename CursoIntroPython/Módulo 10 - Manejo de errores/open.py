def main():
    try:
        open("config.txt")
    except FileNotFoundError:
        print("No se pudo encontrar tu archivo. ¿Todo ok? checalo, pls")
    except IsADirectoryError:
        print("Me enviaste un directorio, yo no leo directorios >:c")
    except (BlockingIOError, TimeOutError)_
        print("No reconozco estos errores, pero al parecer son archivos muy pesados y estoy chiquito")
        
if __name__ == '__main__':
    main()