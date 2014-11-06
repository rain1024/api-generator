class Generator:
    content = "";
    def build(self):
        self.content = "hihi"

    def save(self):
       f = open("dist/abc.txt", "w+")
       f.write(self.content)

    def generate(self):
        self.build()
        self.save()

if __name__ == '__main__':
    generator = Generator()
    generator.generate()
