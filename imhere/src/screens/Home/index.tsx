import { Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
    const participants = ['Marcos', 'Vini', 'Jheimes', 'Douglas', 'debora', 'vanessa', 'bruna', 'batata']

    function handleParticipantAdd() {
        console.log("clicou");
    }

    function handleParticipantRemove(name: String) {
        console.log(`removeu ${name}`);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022
            </Text>

            {/* formulario */}
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder={'Nome do participante'}
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>

            </View>

            <ScrollView>
                {
                    participants.map((participant) => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove("Rodrigo")}
                        />
                    ))
                }
            </ScrollView>

        </View>
    )
}